<template>
  <div style="height:100%">
    <TableBase :rawData="rawData" :columnDefs="columnDefs" tableType="table-head" height="800px"/>
    <Pagination
                    :current="paginationConfig.current"
                    :total="paginationConfig.total"
                    :per-page="paginationConfig.perPage"
                    :pageSizeOptions="paginationConfig.pageSizeOptions"
                    :enableChangePageSize="true"
                    enableSearch
                    
                    enableSelect
                    @page-changed="pageChange"
                    
                />
  </div>
</template>
<script lang="ts">
import TableBase from '@widget/components/Table/index.vue'
import Pagination from "@widget/components/Pagination/index.vue"
import {garageAPI} from '@/API/garage'
import { defineComponent } from 'vue'
export default defineComponent({
  components:{
    Pagination,
    TableBase
  },
  async created(){
    let res =await this.getDataForListAllGarage()
    if(res.code ==1){
    this.paginationConfig.current = 1
    this.paginationConfig.total = res.totalElement
    this.paginationConfig.perPage = this.paginationConfig.pageSize
  }
    
    
  },
  methods:{
    async getDataForListAllGarage(){
      let res:any = await garageAPI.getAllGarage({
      pageSize:this.paginationConfig.pageSize, pageNumber:this.paginationConfig.current
    })
    if(res.code ==1){
      this.rawData = res.data
      this.columnDefs = Object.keys(res.data[0]).map(a=>{
        return {
          field: a,
          label:a,
        }
      })
    }
    

    return res 
    },
    pageChange(data:any){
      console.log(data)
      this.paginationConfig.current = data.page
      this.paginationConfig.pageSize = data.pageSize
      this.paginationConfig.perPage = this.paginationConfig.pageSize
      this.getDataForListAllGarage()
    }
  },
  data(){
    return{
      paginationConfig:{
        current:1,
        total:0,
        perPage:0,
        pageSize:50,
        pageSizeOptions:[
          {
                    value: 50,
                    label: "50",
                },
                {
                    value: 100,
                    label: "100",
                },
                {
                    value:200,
                    label: "200",
                },
                {
                    value: 1000,
                    label: "1000",
                },
        ],
        

      },
      rawData:[],
columnDefs:[] as {
  field: string,
  label: string
}[]
    }
  }
})
</script>