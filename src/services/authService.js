import Admin from "../Admin";
import StorageService from "./storageService";

const USERNAME = "admin"
const PWD = "admin"

class AuthService {
    constructor() {
        this.storageService = new StorageService();
    }
    
    check(data)  {
        return (data.username == USERNAME && data.password == PWD)
    }

    login(data) {
        if(this.check(data)) {
           this.storageService.set("auth", data)
           return {success: true, message: "Giriş Başarılı"};
        }
        return {success: false, message: "Kullanıcı Adı veya Şifre Hatalı"};
    }
    
    logout() {
        this.storageService.remove("auth")
    }

    isAuthenticated() {
        const auth = this.storageService.get("auth")
        return auth != null && this.check(auth)
    }
}

export default AuthService;