import { appConfigs } from "@/configs";
var remoteModules = appConfigs.remoteModules;
var loadedModules = {};
var inProgressLoading = {};
var symperPrefix = 'SYMPER_PREFIX_';

async function getDataInModule(exposeedData, module) {
    let getFuc = await exposeedData.get(module)
    let moduleData = getFuc.call()
    return moduleData.hasOwnProperty('default') ? moduleData.default : moduleData;
}

export const loadScript = function (url, done, key) {
    $
        .getScript(url)
        .done(function () {
            done();
        })
        .fail(function (jqxhr, settings, exception) {
            let err = {};
            err.message = 'Loading script failed';
            err.name = 'ScriptExternalLoadError';
            err.jqxhr = jqxhr;
            err.settings = settings;
            err.exception = exception;
            console.error(err);
        });
    return;
}

export const importRemoteModule = function (moduleName, url = null) {
    return new Promise((resolve, reject) => {
        if (!remoteModules[moduleName]) {
            let error = {
                msg: `Module ${moduleName} is not registered in src/config.js file`
            };
            console.error(error);
            return reject(error)
        } else {
            let key = '';
            if (url) {
                key = moduleName;
            } else {
                let path = remoteModules[moduleName]
                let sections = path.split('@');
                key = sections[0];
                url = sections[1];
            }


            // Nếu chưa đăng ký tên module  này trong file src/config.js.
            if (typeof window[key] !== "undefined") {
                return resolve(window[key]);
            }

            let loadDone = function (event) {
                if (typeof window[key] !== "undefined") {
                    return resolve(window[key]);
                } else {
                    var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                    var realSrc = event && event.target && event.target.src;
                    let err = {};
                    err.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
                    err.name = 'ScriptExternalLoadError';
                    err.type = errorType;
                    err.request = realSrc;
                    console.error(err);
                    reject(err);
                }
            }

            loadScript(
                url,
                loadDone,
                key
            );
        }
    });
}


export const loadRemoteModule = function (name, done) {
    return new Promise(async (resolve, reject) => {
        let sections = name.split('/');
        let moduleName = sections[0];
        let subModuleName = sections[1];
        let keyData = sections[2];
        let keyModule = `${moduleName}/${subModuleName}`;
        let errObj = {};

        // Nếu module này chưa được load
        if (!loadedModules[keyModule]) {
            try {
                let res = await importRemoteModule(moduleName);
                let data = await getDataInModule(res, subModuleName);
                loadedModules[keyModule] = data;
            } catch (error) {
                console.error(error);
                reject(error)
            }
        }

        if (keyData) {
            if (loadedModules[keyModule][keyData]) {
                console.log('before resolve module', 'xxxxxxxxxxxxxxxx');
                if (typeof done == 'function') {
                    done.call(null, loadedModules[keyModule])
                }
                resolve(loadedModules[keyModule][keyData]);
            } else {
                errObj = {
                    msg: `Can not resolve sub module ${keyData} in module ${moduleName}`,
                    module: loadedModules[keyModule]
                };
                console.error(errObj);
                reject(errObj)
            }
        } else {
            if (typeof done == 'function') {
                done.call(null, loadedModules[keyModule])
            }
            resolve(loadedModules[keyModule]);
        }
    });
}

export const loadCssFile = function (url) {
    let createdTag = false;
    var styles = document.getElementsByTagName("link");
    for (var i = 0; i < styles.length; i++) {
        if (styles[i].getAttribute("href") == url) {
            createdTag = true;
            break;
        }
    }

    if (!createdTag) {
        let style = document.createElement('link');
        style.timeout = 120;
        style.href = url;
        document.head.appendChild(style);
    }
}

/**
 * Load remote module từ cache một cách đồng bộ, 
 * Để hàm này trả về đúng kết quả bắt buộc phải gọi hàm loadRemoteModule trước đó để load vào cache
 */
export const importRemoteModuleFromCache = function (name) {
    let sections = name.split('/');
    let moduleName = sections[0];
    let subModuleName = sections[1];
    let keyData = sections[2];
    let keyModule = `${moduleName}/${subModuleName}`;

    if (!loadedModules[keyModule]) {
        console.error({
            msg: `Module ${moduleName} is not loaded to cache`
        });
        return null;
    }

    if (keyData) {
        if (loadedModules[keyModule][keyData]) {
            return loadedModules[keyModule][keyData];
        } else {
            console.error({
                msg: `Can not resolve sub module ${keyData} in module ${moduleName}`,
                module: loadedModules[keyModule]
            });
            return null;
        }
    } else {
        return loadedModules[keyModule];
    }
}