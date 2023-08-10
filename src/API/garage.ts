import Api from '@/API/api.js';
import { appConfigs } from '@/configs';

let api = new Api(appConfigs.apiDomain.garageService);
let test = new Api(appConfigs.apiDomain.test)

export const garageAPI = {
    getAllGarage(data:any){
        return api.get('garages', data);
    },
    test(){
        return test.get('api/v1/report/get-service-type-by-date?fromDate=2023-01-01&toDate=2023-06-01&phoneIgnoreList=0901706555,0328593989')
    }
};
