const EXPIRE_TIME = 604800; // một tuần
class IndexedDB {
    constructor(_dbName) {
        this.dbName = _dbName;
        this.dbVersionNumber = 1;
    }

    setDBVersionNumber(_dbVersionNumber) {
        this.dbVersionNumber = _dbVersionNumber;
    }

    open(
        objName,
        keyPath = false,
        objData = false,
        onsuccess,
        onerror = false,
        onupgradeneeded = false
    ) {
        let self = this;
        return new Promise((resolve, reject) => {
            self.objName = objName;
            self.request = indexedDB.open(self.dbName, self.dbVersionNumber);

            if (onerror) {
                self.request.onerror = (event) => onerror();
            }

            self.request.onerror = (err) => {
                reject(err);
                console.error('Can not open database ' + self.dbName, err);
                if (onerror) {
                    onerror();
                }
            };

            self.request.onsuccess = (event) => {
                self.db = self.request.result;
                resolve();
                if (onsuccess) {
                    onsuccess();
                }
            };

            self.request.onupgradeneeded = (event) => {
                let db = event.target.result;
                let option = keyPath
                    ? { keyPath: keyPath }
                    : { autoIncrement: true };
                let objectStore = db.createObjectStore(objName, option);
                if (objData != undefined) {
                    for (let key in objData) {
                        objectStore.add(objData[key]);
                    }
                }
                if (onupgradeneeded) {
                    onupgradeneeded();
                }
            };
        });
    }

    readAll(callback) {
        let objectStore = this.db
            .transaction(this.objName)
            .objectStore(this.objName);
        objectStore.openCursor().onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                callback(cursor);
                cursor.continue();
            } else {
                console.log('No more entries!');
            }
        };
    }

    read(id, autCloseConn = true) {
        let transaction = this.db.transaction([this.objName]);
        let objectStore = transaction.objectStore(this.objName);
        let keySearch = '' + id;
        let self = this;

        return new Promise((resolve, reject) => {
            let request = objectStore.get(id);
            request.onerror = (event) => {
                reject(event);
                // autCloseConn && self.db.close();
            };
            request.onsuccess = (event) => {
                resolve(request.result);
                // autCloseConn && self.db.close();
            };
        });
    }

    async save(data, key) {
        let savedData = await this.read(key, false);
        if (savedData) {
            await this.put(data, key);
        } else {
            await this.add(data, key);
        }
    }

    add(value, key = null) {
        let transaction = this.db.transaction([this.objName], 'readwrite');
        let objectStore = transaction.objectStore(this.objName);
        let self = this;

        return new Promise((resolve, reject) => {
            let request = {};
            if (key) {
                request = objectStore.add(value, key);
            } else {
                request = objectStore.add(value);
            }
            request.onsuccess = (event) => {
                resolve(event);
                // self.db.close();
            };
            request.onerror = (event) => {
                reject(event);
                // self.db.close();
            };
        });
    }

    put(objData, key = null) {
        let transaction = this.db.transaction([this.objName], 'readwrite');
        let objectStore = transaction.objectStore(this.objName);
        let self = this;

        return new Promise((resolve, reject) => {
            let request = {};
            if (key) {
                request = objectStore.put(objData, key);
            } else {
                request = objectStore.put(objData);
            }
            request.onsuccess = (event) => {
                resolve(event);
                // self.db.close();
            };
            request.onerror = (event) => {
                reject(event);
                // self.db.close();
            };
        });
    }

    remove(id) {
        let transaction = this.db.transaction([this.objName], 'readwrite');
        let objectStore = transaction.objectStore(this.objName);
        let keySearch = '' + id;
        let self = this;

        return new Promise((resolve, reject) => {
            let request = objectStore.delete(id);
            request.onsuccess = (event) => {
                resolve(event);
                // self.db.close();
            };
            request.onerror = (event) => {
                reject(event);
                // self.db.close();
            };
        });
    }

    clearAll() {
        let transaction = this.db.transaction([this.objName], 'readwrite');
        let objectStore = transaction.objectStore(this.objName);
        let self = this;

        return new Promise((resolve, reject) => {
            let request = objectStore.clear();

            request.onsuccess = (event) => {
                resolve(event);
                // self.db.close();
            };
            request.onerror = (event) => {
                reject(event);
                // self.db.close();
            };
        });
    }
}
export default IndexedDB;
