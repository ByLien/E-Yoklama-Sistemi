import StorageService from "./storageService";

class AttendanceService {
    constructor() {
        this.storageService = new StorageService();
    }

    getAttendanceByCode(code) {
        const all = this.storageService.get('attendances') ?? {};
        if(all[code]) {
            return all[code]
        }
        return []
    }

    addAttendance(attendance) {
        const attendances = this.getAttendanceByCode(attendance.code);
        
        const isExistsAttendance = attendances.some(a => a.studentNumber == attendance.studentNumber);
        if(isExistsAttendance) {
            return "Zaten yoklama aldınız.";
        }

        attendance.date = new Date();

        attendances.push(attendance);

        const allAttendances = this.storageService.get("attendances") ?? {}

        this.storageService.set('attendances', {...allAttendances, [attendance.code]: attendances});
        return "";
    }

    removeAttendancesByCode(code) {
        const all = this.storageService.get('attendances') ?? {};
        delete all[code];
        this.storageService.set('attendances', all);
    }
}

export default AttendanceService;
    