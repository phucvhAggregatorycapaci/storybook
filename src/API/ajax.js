export const ajax = async (options) => {
    if (options.method == 'GET') {
        if (Object.keys(options.data).length > 0) {
            let fullParams = serialize(options.data);
            options.url.includes('?')
                ? (options.url = options.url + '&' + fullParams)
                : (options.url = options.url + '?' + fullParams);
        }
    } else {
        if (!options.contentType) {
            if (!options.headers['Content-Type']) {
                options.headers['Content-Type'] =
                    'application/x-www-form-urlencoded; charset=UTF-8';
                options.body = options.data;
                if (typeof options.data == 'object') {
                    options.body = serialize(options.data);
                }
            } else {
                let body = options.data;
                if (options.headers['Content-Type'].includes('application/x-www-form-urlencoded')) {
                    body = new serialize(options.data);
                } else {
                    if (typeof options.data == 'object') {
                        body = JSON.stringify(options.data);
                    }
                }
                options.body = body;
            }
        } else {
            options.headers['Content-Type'] = options.contentType;
            options.body =
                typeof options.data == 'object'
                    ? JSON.stringify(options.data)
                    : options.data;
        }
    }
    const response = await fetch(options.url, options);
    return response.status == 204
        ? null
        : options.dataType == 'text'
            ? response.text()
            : response.json();
};

/**
 * Dev create : Dungna
 * Date create: 2020/12/29
 * Description: Hàm chuyển object thành url params
 */
export const serialize = function (obj, prefix) {
    let str = [],
        p;
    for (p in obj) {
        if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + '[' + p + ']' : p,
                v = obj[p];
            str.push(
                v !== null && typeof v === 'object'
                    ? serialize(v, k)
                    : encodeURIComponent(k) + '=' + encodeURIComponent(v),
            );
        }
    }
    return str.join('&');
};
