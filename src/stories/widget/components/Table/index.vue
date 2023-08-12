<template>
    <div >
        <header class="px-4 pt-4 pb-3 mb-3">
                <h5 class="card-title mb-0">{{ tableName }}</h5>
            </header>
        <div>
        <vue-good-table
            class="vue-good-table-base"
            :max-height="height"
            :columns="columnDefs"
            :rows="rawData"
            :sort-options="{
                enabled:sortEnabled
            }"
        >

        </vue-good-table>
        </div>
    </div>
</template>
<script lang="ts">
export type tableColumnDefs={
    label:string,
    field:string,
}
    export default{
        props:{
            height:{
                default: "auto" as string
            },
            tableName:{
                default:"Table " as string
            },
            rawData:{
                default:[] as any[]
            },
            columnDefs:{
                default: [] as tableColumnDefs[]
            },
            sortEnabled:{
                default: false as boolean
            },
            /**
             * cho phép các options: ["table-head","bordered","borderless", "striped"]
             */
            tableType:{
                default:"" as string
            }
        },
    }
</script>

<style lang="scss" >
    .vue-good-table-base thead{
        position:sticky;
        top:0px
    }
.vgt-inner-wrap {
    @apply shadow-none;
}
</style>