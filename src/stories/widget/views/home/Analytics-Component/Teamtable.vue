<template></template>
<script>
import Dropdown from "@widget/components/Dropdown/index.vue";
import Icon from "@widget/components/Icon/index.vue";
import Pagination from "@widget/components/Pagination";
import { MenuItem } from "@headlessui/vue";
import { shapeLine4 } from "./data.js";

// Image Import
import user1 from "@/assets/images/users/user-1.jpg";
import user2 from "@/assets/images/users/user-2.jpg";
import user3 from "@/assets/images/users/user-3.jpg";
import user4 from "@/assets/images/users/user-4.jpg";

export default {
    components: {
        Pagination,
        Dropdown,
        Icon,
        MenuItem,
    },

    data() {
        return {
            shapeLine4,
            current: 1,
            perpage: 4,
            pageRange: 5,
            searchTerm: "",
            actions: [
                {
                    name: "view",
                    icon: "heroicons-outline:eye",
                },
                {
                    name: "edit",
                    icon: "heroicons:pencil-square",
                },
                {
                    name: "delete",
                    icon: "heroicons-outline:trash",
                },
            ],
            options: [
                {
                    value: "1",
                    label: "1",
                },
                {
                    value: "3",
                    label: "3",
                },
                {
                    value: "5",
                    label: "5",
                },
            ],
            teamtable: [
                {
                    customer: {
                        name: "Arlene McCoy",
                        image: user1,
                        deg: "Ux designer",
                    },
                    status: "progress",
                    time: "42.5 hours",
                    chart: null,
                },
                {
                    customer: {
                        name: "Arlene McCoy",
                        image: user2,
                        deg: "Ux designer",
                    },
                    status: "complete",
                    time: "42.5 hours",
                    chart: null,
                },
                {
                    customer: {
                        name: "Arlene McCoy",
                        image: user3,
                        deg: "Ux designer",
                    },
                    status: "progress",
                    time: "42.5 hours",
                    chart: null,
                },
                {
                    customer: {
                        name: "Arlene McCoy",
                        image: user4,
                        deg: "Ux designer",
                    },
                    status: "complete",
                    time: "42.5 hours",
                    chart: null,
                },
            ],
            columns: [
                {
                    label: "assignee",
                    field: "customer",
                },

                {
                    label: "Amount",
                    field: "status",
                },
                {
                    label: "time",
                    field: "time",
                },
                {
                    label: "chart",
                    field: "chart",
                },

                {
                    label: "Action",
                    field: "action",
                },
            ],
        };
    },
};
</script>
<style lang="scss"></style>
