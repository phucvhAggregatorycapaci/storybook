<template>
    <div>
        <header class="px-4 pt-4 pb-3 mb-3">
                <h5 class="card-title mb-0">{{ tableName }}</h5>
            </header>
        <vue-good-table
            :columns="columnDefs"
            :rows="rawData"
            :styleClass="`vgt-table ${{ tableType }}`"
            :sort-options="{
                enabled:sortEnabled
            }"
        >

        </vue-good-table>
    </div>
</template>
<script lang="ts">
export type tableColumnDefs={
    label:string,
    field:string,
}
    export default{
        props:{
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

<style lang="scss" scoped>
.vgt-inner-wrap {
    @apply shadow-none;
}
</style>