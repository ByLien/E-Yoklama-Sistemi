class StorageService {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    get(key) {
        const data = localStorage.getItem(key)
        if(data === null) {
            return null;
        }
        return JSON.parse(data);
    }
    
    remove(key) {
        localStorage.removeItem(key);
    }
}

export default StorageService;