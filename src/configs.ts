import { util } from '@/plugins/util.js';

var configs = {
    // nơi chứa domain của các api mà ko bị phụ thuộc vào môi trường
    apiDomain: {} as any,
    uniqueApiDomain: {
        garageService: 'http://stg-api.cardoctor.com.vn/garage-service/api/v1/',
        test:'https://stg-api.cardoctor.com.vn/report-service/'
    } as any,

    reformatUrl(obj:any) {
        for (let key in obj) {
            if (obj[key]) {
                if (typeof obj[key] == 'string') {
                    obj[key] = util.addEnvToUrl(obj[key]);
                } else if (typeof obj[key] == 'object') {
                    this.reformatUrl(obj[key]);
                }
            }
        }
    },
};
// sửa lại url theo môi trường code
// configs.reformatUrl(configs.apiDomain);

// Thêm các domain thuộc uniqueApiDomain vào khai báo domain của api
for (let key in configs.uniqueApiDomain) {
    configs.apiDomain[key] = configs.uniqueApiDomain[key]
}

export const appConfigs = configs;
