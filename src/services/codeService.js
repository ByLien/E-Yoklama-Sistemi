import AttendanceService from "./attendanceService";
import StorageService from "./storageService";

class CodeService {
    constructor() {
        this.storageService = new StorageService();
        this.attendanceService = new AttendanceService();
    }

    getAllCode() {
        return this.storageService.get('codes') ?? [];
    }

    addCode(code) {
        const codes = this.getAllCode() ?? [];
        
        code.code = Math.floor(Math.random() * (999999 - 100000)) + 100000; //6 basamaklı sayı üretir (100000 ile 999999 arasında);
        code.date = new Date();

        codes.push(code);
        this.storageService.set('codes', codes);
    }

    removeAll() {
        this.storageService.remove('codes');
        this.storageService.remove("attendances")
    }

    removeCode(code) {
        const codes = this.getAllCode();
        const index = codes?.findIndex(c => c.code === code);
        codes?.splice(index, 1);
        this.attendanceService.removeAttendancesByCode(code);
        this.storageService.set('codes', codes);
    }

    isExists(code) {
        const codes = this.getAllCode();
        return codes?.some(c => c.code == code);
    }
}

export default CodeService