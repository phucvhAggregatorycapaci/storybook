<template>
    <div>
        <h3>Thông tin garage</h3>
    <div style="display:grid;grid-template-columns: auto auto auto;
    width: 100%;height:auto
    ">
        <div v-for="item in configCreateData" style=" padding: 10px">
            <p style="text-align:left">{{ item.label }}:</p>
        <component
            :is="item.type"
            style="height: 40px"
            :placeholder="item.placeholder"
            v-model="item.vallue"
            :config="item.config"
            :isMask="item.isMask"
            :prepend="item.prepend"
        >
            
        </component>
        </div>
    </div>
    <Button text="Tạo mới" btnClass="btn-primary "/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Button from "@widget/components/Button/index.vue"
import Input from '@widget/components/InputGroup/index.vue'
import FlatPickr from '@widget/components/FlatPickr/index.vue'
// import 

export default defineComponent({
    components:{
        Input,
        Button,
        FlatPickr
    },
    data(){
        return{
            configCreateData:[
                {

                    type:Input,
                    value:"",
                    field:"name",
                    label:"Tên garage",
                    isMask:true,
                    placeholder:"Tên garage"
                },
                {
                    type:Input,
                    value:"",
                    isMask:true,
                    prepend:"+84",
                    options:{
                        phone:true,
                        phoneRegioCode:"VI"
                    },
                    placeholder:"Số điện thoại",
                    field:"phone",
                    label:"Số điện thoại"
                },
                {
                    type:Input,
                    value:"",
                    field:"email",
                    label:"Email",
                    isMask:true,
                    prepend:"@example.com",
                    options:{
                        phone:true,
                    },
                    placeholder:"email",
                },
                {
                    type:Input,
                    value:"",
                    field:"contract_status",
                    placeholder:"contract_status",
                    label:"contract_status"
                },
                {
                    type:Input,
                    value:"",
                    field:"contractFromDate",
                    placeholder:"contractFromDate",
                    label:"contractFromDate"
                },
                {
                    type:Input,
                    value:"",
                    field:"contractToDate",
                    placeholder:"contractToDate",
                    label:"contractToDate"
                },
                {
                    type:Input,
                    value:"",
                    field:"latitude",
                    placeholder:"latitude",
                    label:"latitude"
                },
                {
                    type:Input,
                    value:"",
                    field:"longitude",
                    placeholder:"longitude",
                    label:"longitude"
                },
                {
                    type:Input,
                    value:"",
                    field:"provinceId",
                    placeholder:"Tỉnh/thành phố",
                    label:"Tỉnh/thành phố"
                },
                {
                    type:Input,
                    value:"",
                    field:"districtId",
                    placeholder:"Quận/huyện",
                    label:"Quận/huyện"
                },
                {
                    type:Input,
                    value:"",
                    field:"wardId",
                    placeholder:"Xã/phường",
                    label:"wardId"
                },
                {
                    type:Input,
                    value:"",
                    field:"parentGarageId",
                    label:"parentGarageId"
                },
                {
                    type:Input,
                    value:"",
                    field:"address",
                    placeholder:"Địa chỉ",
                    label:"Địa chỉ"
                },
                {
                    type:Input,
                    value:"",
                    field:"numEmployee",
                    placeholder:"Lượng nhân viên",
                    label:"Lượng nhân viên"
                },
                {
                    type:Input,
                    value:"",
                    field:"carLift",
                    placeholder:"carLift",
                    label:"carLift"
                },
                {
                    type:Input,
                    value:"",
                    field:"garageArea",
                    placeholder:"garageArea",
                    label:"garageArea"
                },
                {
                    type:Input,
                    value:"",
                    field:"supportSos",
                    placeholder:"supportSos",
                    label:"supportSos"
                },
                {
                    type:Input,
                    value:"",
                    field:"isReceiveWebsite",
                    placeholder:"isReceiveWebsite",
                    label:"isReceiveWebsite"
                },
                {
                    type:Input,
                    value:"",
                    field:"isReceiveBooking",
                    placeholder:"isReceiveBooking",
                    label:"isReceiveBooking"
                },
                {
                    type:Input,
                    value:"",
                    field:"serviceRadius",
                    placeholder:"serviceRadius",
                    label:"serviceRadius"
                },
                {
                    type:Input,
                    value:"",
                    field:"sosRadius",
                    placeholder:"sosRadius",
                    label:"sosRadius"
                },
                {
                    type:FlatPickr,
                    value:"",
                    field:"openTime",
                    placeholder:"Giờ mở cửa",
                    config:{
                        enableTime: true, noCalendar: true, dateFormat: 'H:i'
                    },
                    label:"Giờ mở cửa"
                },
                {
                    type:FlatPickr,
                    value:"",
                    field:"closeTime",
                    placeholder:"Giờ đóng cửa",
                    config:{
                        enableTime: true, noCalendar: true, dateFormat: 'H:i'
                    },
                    label:"Giờ đóng cửa"
                },
                {
                    type:Input,
                    value:"",
                    field:"rating",
                    placeholder:"Đánh giá",
                    label:"Đánh giá"
                },
                {
                    type:Input,
                    value:"",
                    field:"isVerified",
                    placeholder:"isVerified",
                    label:"isVerified"
                }
            ] as any[]
        }
    }
})
</script>