<template>
    <div :class="$store.state.themeSettings.semidark ? 'dark' : ''">
        <div
            :class="`sidebar-wrapper bg-white dark:bg-slate-800    ${
                $store.state.themeSettings.skin === 'bordered'
                    ? 'border-r border-gray-5002 dark:border-slate-700'
                    : 'shadow-base'
            }   ${
                $store.state.themeSettings.sidebarCollasp
                    ? closeClass
                    : openClass
            }
      ${$store.state.themeSettings.isMouseHovered ? 'sidebar-hovered' : ''}
      
      `"
            @mouseenter="$store.state.themeSettings.isMouseHovered = true"
            @mouseleave="$store.state.themeSettings.isMouseHovered = false"
        >
            <div
                :class="`logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] py-6  sticky top-0   px-4  ${
                    $store.state.themeSettings.sidebarCollasp
                        ? closeClass
                        : openClass
                } ${
                    $store.state.themeSettings.skin === 'bordered'
                        ? ' border-b border-r border-gray-5002 dark:border-slate-700'
                        : ' border-none'
                }
        ${$store.state.themeSettings.isMouseHovered ? 'logo-hovered' : ''}
        
        `"
            >
                <router-link
                    :to="{ name: 'home' }"
                    v-if="
                        !$store.state.themeSettings.sidebarCollasp ||
                        $store.state.themeSettings.isMouseHovered
                    "
                >
                    <img
                        src="@/assets/images/logo/logo.svg"
                        alt=""
                        v-if="
                            !$store.state.themeSettings.isDark &&
                            !$store.state.themeSettings.semidark
                        "
                    />

                    <img
                        src="@/assets/images/logo/logo-white.svg"
                        alt=""
                        v-if="
                            $store.state.themeSettings.isDark ||
                            $store.state.themeSettings.semidark
                        "
                    />
                </router-link>
                <router-link
                    :to="{ name: 'home' }"
                    v-if="
                        $store.state.themeSettings.sidebarCollasp &&
                        !$store.state.themeSettings.isMouseHovered
                    "
                >
                    <img
                        src="@/assets/images/logo/logo-c.svg"
                        alt=""
                        v-if="
                            !$store.state.themeSettings.isDark &&
                            !$store.state.themeSettings.semidark
                        "
                    />
                    <img
                        src="@/assets/images/logo/logo-c-white.svg"
                        alt=""
                        v-if="
                            $store.state.themeSettings.isDark ||
                            $store.state.themeSettings.semidark
                        "
                    />
                </router-link>
                <span
                    class="cursor-pointer text-slate-900 dark:text-white text-2xl"
                    v-if="
                        !$store.state.themeSettings.sidebarCollasp ||
                        $store.state.themeSettings.isMouseHovered
                    "
                    @click="
                        $store.state.themeSettings.sidebarCollasp =
                            !$store.state.themeSettings.sidebarCollasp
                    "
                >
                    <!-- <Icon icon="heroicons-outline:menu-alt-3"
        /> -->
                    <div
                        class="h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-150"
                        :class="
                            $store.state.themeSettings.sidebarCollasp
                                ? ''
                                : 'ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700'
                        "
                    ></div>
                </span>
            </div>
            <div
                class="h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none"
                :class="[shadowbase ? ' opacity-100' : ' opacity-0']"
            ></div>

            <SimpleBar
                class="sidebar-menu px-4 h-[calc(100%-80px)]"
                @created="
                    (instance) => {
                        simplebarInstance = instance;
                    }
                "
            >
                <Navmenu :items="items" />
            </SimpleBar>
        </div>
    </div>
</template>
<script lang="ts">
// import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
// import { menuItems } from "../../constant/data";
import Navmenu from "./Navmenu.vue";
import { gsap } from "gsap";
import { SimpleBar } from "simplebar-vue3";
import { ref, onMounted } from "vue";
import store from "@/store";

export type navItem = {
    title?: string;
    isHeadr?: boolean;
    icon?: string;
    isOpen?: boolean;
    link?: string;
    badge?: string;
    child?: navChildItem[];
};
export type navChildItem = {
    childtitle: string;
    childlink: string;
};

export default defineComponent({
    props: {
        items: {
            default: [] as navItem[],
        },
    },
    created() {
        // if (!this.$store) {
        //     this.$store = store;
        // }
        console.log(this.$store.state.themeSettings);
    },
    components: {
        // Icon,
        Navmenu,
        SimpleBar,
    },
    data() {
        return {
            openClass: "w-[248px]",
            closeClass: "w-[72px] close_sidebar",
        };
    },

    setup() {
        interface SimpleBarInstance {
            getScrollElement(): HTMLElement;
        }
        const shadowbase = ref<boolean>(false);
        const simplebarInstance = ref<SimpleBarInstance | null>(null);
        onMounted(() => {
            if (simplebarInstance != null && simplebarInstance.value != null) {
                simplebarInstance
                    .value!.getScrollElement()
                    .addEventListener("scroll", () => {
                        if (
                            simplebarInstance!.value!.getScrollElement()
                                .scrollTop > 50
                        ) {
                            simplebarInstance!
                                .value!.getScrollElement()
                                .classList.add("scroll");
                            shadowbase.value = true;
                        } else {
                            simplebarInstance!
                                .value!.getScrollElement()
                                .classList.remove("scroll");
                            shadowbase.value = false;
                        }
                    });
            }
        });

        const enterWidget = (el: any) => {
            gsap.fromTo(
                el,
                { x: 0, opacity: 0, scale: 0.5 },
                { x: 0, opacity: 1, duration: 0.3, scale: 1 },
            );
        };
        const leaveWidget = (el: any) => {
            gsap.fromTo(
                el,
                { x: 0, opacity: 1, scale: 1 },
                { x: 0, opacity: 0, duration: 0.3, scale: 0.5 },
            );
        };

        return {
            enterWidget,
            leaveWidget,
            simplebarInstance,
            shadowbase,
        };
    },
});
</script>
<style lang="scss">
.sidebar-wrapper {
    @apply fixed ltr:left-0 rtl:right-0 top-0   h-screen   z-[999];
    transition: width 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    will-change: width;
}

.nav-shadow {
    background: linear-gradient(
        rgb(255, 255, 255) 5%,
        rgba(255, 255, 255, 75%) 45%,
        rgba(255, 255, 255, 20%) 80%,
        transparent
    );
}
.dark {
    .nav-shadow {
        background: linear-gradient(
            rgba(#1e293b, 100%) 5%,
            rgba(#1e293b, 75%) 45%,
            rgba(#1e293b, 20%) 80%,
            transparent
        );
    }
}
.sidebar-wrapper.sidebar-hovered {
    width: 248px !important;
}
.logo-segment.logo-hovered {
    width: 248px !important;
}
</style>
