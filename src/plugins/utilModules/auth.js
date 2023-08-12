import IndexedDB from '@/plugins/utilModules/indexedDB.js';

async function getLoginInfoFromIndexedDB() {
    return new Promise((resolve, reject) => {
        let indexedDB = new IndexedDB('LOGIN-INFOR');
        indexedDB.open('loginInfo', false, false, async () => {
            try {
                let s = Date.now();
                let loginedInfo = await indexedDB.read('loginInfo');
                if (typeof loginedInfo == 'string') {
                    loginedInfo = JSON.parse(loginedInfo);
                }
                resolve(loginedInfo);
            } catch (error) {
                reject(error);
            }
        });
    });
}

function removeLoginedInfoInIndexedDB() {
    let indexedDB = new IndexedDB('LOGIN-INFOR');
    indexedDB.open('loginInfo', false, false, async () => {
        try {
            indexedDB.remove('loginInfo');
        } catch (error) {
            console.error(
                error
            );
        }
    });
}

export const getClientId = function () {
    let clientId = localStorage.getItem('client-id');
    if (!clientId) {
        clientId =
            btoa(unescape(encodeURIComponent(Date.now()))) +
            (Math.random() + 1).toString(36).substring(7);
        localStorage.setItem('client-id', clientId);
    }
    return clientId;
};

/**
 * Các hàm phục vụ cho việc xác thực, lưu trữ dữ liệu đăng nhập cho người dùng
 */
export const authUtil = {
    async getLoginInfo() {
        return await getLoginInfoFromIndexedDB();
    },
    saveLoginInfo(data) {
        /**
         * data có dạng: {
         *      token: "xxx",
         *      baId: "yyy",
         *      endUserId: "zzzz"
         * }
         */
        return new Promise((resolve, reject) => {
            localStorage.setItem('login-info', JSON.stringify(data));
            data.clientId = getClientId();

            let indexedDB = new IndexedDB('LOGIN-INFOR');
            indexedDB.open('loginInfo', false, false, async () => {
                try {
                    await indexedDB.save(data, 'loginInfo');
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        });
    },

    getToken() {
        if (self.window) {
            let loginInfo = localStorage.getItem('login-info');
            if (loginInfo) {
                return JSON.parse(loginInfo).token;
            } else {
                return false;
            }
        } else {
            return new Promise(async (resolve, reject) => {
                let loginInfo = await getLoginInfoFromIndexedDB();
                resolve(loginInfo.token);
            });
        }
    },

    isSupportter() {
        return this.getSavedUserInfo().profile.type == 'ba';
    },

    checkLogin() {
        if (this.getToken()) {
            return true;
        } else {
            return false;
        }
    },
    async logout() {
        let loginedInfo = await getLoginInfoFromIndexedDB();
        removeLoginedInfoInIndexedDB();
        localStorage.removeItem('login-info');
    },

    getSavedUserInfo() {
        let loginInfo = localStorage.getItem('login-info');
        if (loginInfo) {
            return JSON.parse(loginInfo);
        } else {
            return {};
        }
    },

    async setSavedUserInfo(data) {
        let loginInfo = this.getSavedUserInfo();
        loginInfo = Object.assign(loginInfo, data);
        await this.saveLoginInfo(loginInfo);
    },

    async getCurrentUserRole() {
        let data = await getLoginInfoFromIndexedDB();
        let role = '';
        if (
            data.profile &&
            data.profile.userDelegate &&
            data.profile.userDelegate.role
        ) {
            role = data.profile.userDelegate.role;
        } else if (data.profile) {
            role = data.profile.role;
        }
        return role;
    },

    isBa() {
        let userInfo = this.getSavedUserInfo();
        let userType = userInfo.profile.type;
        return userType == 'ba';
    },

    getTenantId() {
        let userInfo = this.getSavedUserInfo();
        let rsl = '';
        if (userInfo.profile.tenantId) {
            rsl = userInfo.profile.tenantId;
        }

        if (userInfo.profile.tenant && userInfo.profile.tenant.id) {
            rsl = userInfo.profile.tenant.id;
        }
        return rsl;
    }
};
