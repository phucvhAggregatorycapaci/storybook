<template>
  <main class="app-wrapper" style="height:100vh">
    <SideBar :items="appConfig.sideBarItem"
      v-if="
        $store.state.themeSettings.menuLayout === 'vertical' &&
        $store.state.themeSettings.sidebarHidden === false 
      "
    />
  <div
  style="height: 100%;"
      class="content-wrapper transition-all duration-150"
      :class="window.innerWidth > 1280 ? switchHeaderClass() : ''"
    >
      <div
      style="height: 100%;"
        class="page-content"
        :class="$route.meta.appheight ? 'h-full' : 'page-min-height'"
      >
        <div
        style="height: 100%;"
          :class="` transition-all duration-150 ${
            $store.state.themeSettings.cWidth === 'boxed'
              ? 'container mx-auto'
              : 'container-fluid'
          }`"
        >
          <Breadcrumbs v-if="!$route.meta.hide" />
          <router-view v-slot="{ Component }" style="height: 100%;">
            <transition name="router-animation" mode="out-in" appear>
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">

// import LoginView from '@widget/views/auth/login/login3.vue'
import AppConfig from './appConfig'
import SideBar from '@widget/components/Sidebar/index.vue'
import { defineComponent } from 'vue';
import i18n  from '@/lang/i18n'
export default defineComponent({
  created(){
    console.log(i18n.global.t("world"))
    console.log(this.$t("world"))
    // console.log(test)
    // console.log(i18n.t('hello'))
    if (localStorage.theme === "dark") {
    document.body.classList.add("dark");
    this.$store.state.themeSettings.theme = "dark";
    this.$store.state.themeSettings.isDark = true;
} else {
    document.body.classList.add("light");
    this.$store.state.themeSettings.theme = "light";
    this.$store.state.themeSettings.isDark = false;
}
if (localStorage.semiDark === "true") {
    document.body.classList.add("semi-dark");
    this.$store.state.themeSettings.semidark = true;
    this.$store.state.themeSettings.semiDarkTheme = "semi-dark";
} else {
    document.body.classList.add("semi-light");
    this.$store.state.themeSettings.semidark = false;
    this.$store.state.themeSettings.semiDarkTheme = "semi-light";
}
// check loacl storege for menuLayout
if (localStorage.menuLayout === "horizontal") {
    this.$store.state.themeSettings.menuLayout = "horizontal";
} else {
    this.$store.state.themeSettings.menuLayout = "vertical";
}

// check skin  for localstorage
if (localStorage.skin === "bordered") {
    this.$store.state.themeSettings.skin = "bordered";
    document.body.classList.add("skin--bordered");
} else {
    this.$store.state.themeSettings.skin = "default";
    document.body.classList.add("skin--default");
}
// check direction for localstorage
if (localStorage.direction === "true") {
    this.$store.state.themeSettings.direction = true;
    document.documentElement.setAttribute("dir", "rtl");
} else {
    this.$store.state.themeSettings.direction = false;
    document.documentElement.setAttribute("dir", "ltr");
}
  },
  components:{
    SideBar
  },
  data(){
    return{
      window:window,
      appConfig:AppConfig
  }
  },
  methods:{
    switchHeaderClass() {
      if (
        this.$store.state.themeSettings.menuLayout === "horizontal" ||
        this.$store.state.themeSettings.sidebarHidden
      ) {
        return "ltr:ml-0 rtl:mr-0";
      } else if (this.$store.state.themeSettings.sidebarCollasp) {
        return "ltr:ml-[72px] rtl:mr-[72px]";
      } else {
        return "ltr:ml-[248px] rtl:mr-[248px]";
      }
    },
  },
  computed:{
    includeSidebar(){
      console.log(this)
      return true
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="scss">
.router-animation-enter-active {
  animation: coming 0.2s;
  animation-delay: 0.1s;
  opacity: 0;
}
.router-animation-leave-active {
  animation: going 0.2s;
}

@keyframes going {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(0, 4%, 0) scale(0.93);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translate3d(0, 4%, 0) scale(0.93);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes slideLeftTransition {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
.mobilemenu-enter-active {
  animation: slideLeftTransition 0.24s;
}

.mobilemenu-leave-active {
  animation: slideLeftTransition 0.24s reverse;
}

.page-content {
  @apply md:pt-6 md:pb-[37px] md:px-6 pt-[15px] px-[15px] pb-24;
}
.page-min-height {
  min-height: calc(var(--vh, 1vh) * 100 - 132px);
}
</style>
