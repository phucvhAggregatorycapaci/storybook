import { util } from '@/plugins/util.js';

var configs = {
    // nơi chứa domain của các api mà ko bị phụ thuộc vào môi trường
    apiDomain: {} as any,
    uniqueApiDomain: {
        provincesAPI:'https://provinces.open-api.vn/api/',
        garageService: 'http://stg-api.cardoctor.com.vn/garage-service/api/v1/',
        test:'https://stg-api.cardoctor.com.vn/report-service/'
    } as any,

};
// sửa lại url theo môi trường code
// configs.reformatUrl(configs.apiDomain);

// Thêm các domain thuộc uniqueApiDomain vào khai báo domain của api
for (let key in configs.uniqueApiDomain) {
    configs.apiDomain[key] = configs.uniqueApiDomain[key]
}

export const appConfigs = configs;
