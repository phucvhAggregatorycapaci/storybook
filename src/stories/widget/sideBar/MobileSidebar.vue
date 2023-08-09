<template>
    <div
        :class="`mobile-sidebar bg-white dark:bg-slate-800  ${
            $store.state.themeSettings.theme === 'bordered'
                ? 'border border-gray-5002'
                : 'shadow-base'
        }   `"
    >
        <div class="logo-segment flex justify-between items-center px-4 py-6">
            <router-link :to="{ name: 'home' }">
                <img
                    :src="menuLogo"
                    alt=""
                    v-if="!$store.state.themeSettings.isDark"
                />
            </router-link>
            <span
                class="cursor-pointer text-slate-900 dark:text-white text-2xl"
                @click="toggleMsidebar"
                ><Icon icon="heroicons:x-mark"
            /></span>
        </div>

        <div class="sidebar-menu px-4 h-[calc(100%-100px)]" data-simplebar>
            <Navmenu :items="items" />
        </div>
    </div>
</template>
<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import Navmenu from "./Navmenu.vue";
import { navItem, navChildItem } from "./index.vue";
import store from "@/store";

export default defineComponent({
    setup() {},

    components: {
        Icon,
        Navmenu,
    },
    created() {
        //fake store for storybook
        // if (!this.$store) {
        //     this.$store = store;
        // }
    },
    data() {
        return {
            openClass: "w-[248px]",
            closeClass: "w-[72px] close_sidebar",
        };
    },
    props: {
        menuLogo: {
            default: "@/assets/images/logo/logo.svg" as string,
        },
        items: {
            default: [] as navItem[],
        },
    },
    methods: {
        toggleMsidebar() {
            this.$store.state.themeSettings.toggleMsidebar();
        },
    },
});
</script>
<style lang="scss" scoped>
.mobile-sidebar {
    @apply fixed ltr:left-0 rtl:right-0 top-0   h-full   z-[9999]  w-[280px];
}
</style>
