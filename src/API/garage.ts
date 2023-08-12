import Api from '@/API/api.js';
import { appConfigs } from '@/configs';

let api = new Api(appConfigs.apiDomain.garageService);
let provinceAPI = new Api(appConfigs.apiDomain.provincesAPI);
let test = new Api(appConfigs.apiDomain.test)

export const garageAPI = {
    getAllGarage(data:any){
        return api.get('garages', data);
    },
    getGarageInforById(id:string){
        return api.get('garages/'+id)
    },
    async getAddressInfo(data:any){
        let result = {
            wands:"Không có thông tin" as string,
            province:"Không có thông tin" as string,
            district:"Không có thông tin" as string,
        }
        let wards:any = await provinceAPI.get('w/'+data.wardId)
        if(wards.status !=404&&wards.status !=400){
            result.wands = wards.name
        }

        debugger
        let district:any = await provinceAPI.get('d/'+data.districtId)
        if(district.status !=404&&district.status !=400){
            result.district = district.name
        }else{
            district = await provinceAPI.get('d/'+wards.district_code)
            result.district = district.name
        }


        let province:any = await provinceAPI.get('p/'+data.provinceId)
        if(province.status !=404&&province.status !=400){
            result.province = province.name
        }else{
            province = await provinceAPI.get('p/'+district.province_code)
            result.province = province.name
        }
        return result 
    },
    test(){
        return test.get('api/v1/report/get-service-type-by-date?fromDate=2023-01-01&toDate=2023-06-01&phoneIgnoreList=0901706555,0328593989')
    }
};
