<template>
    <span
        @click="toogleDark"
        class="h-[28px] w-[28px] lg:h-[32px] lg:w-[32px] lg:bg-gray-500-f7 bg-slate-50 dark:bg-slate-900 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center"
    >
        <Icon
            icon="heroicons-outline:moon"
            v-if="!this.$store.state.themeSettingsStore.isDark"
        />
        <Icon
            icon="heroicons-outline:sun"
            v-else-if="this.$store.state.themeSettingsStore.isDark"
        />
    </span>
</template>
<script>
import Icon from "@widget/components/Icon/index.vue";
import { useThemeSettingsStore } from "@/store/themeSettings";
const themeSettingsStore = useThemeSettingsStore();

export default {
    components: {
        Icon,
    },
    methods: {
        toogleDark() {
            themeSettingsStore.toogleDark();
        },
    },
};
</script>
<style lang=""></style>
