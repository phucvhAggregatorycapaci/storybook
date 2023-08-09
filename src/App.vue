<template>
  <div>
    <SideBar :items="appConfig.sideBarItem"/>
  <router-view />
  </div>
</template>

<script>

// import LoginView from '@widget/views/auth/login/login3.vue'
import AppConfig from './appConfig'
import SideBar from '@widget/components/Sidebar/index.vue'
export default {
  components:{
    SideBar
  },
  data(){
    return{

      appConfig:AppConfig
  }
  },
  computed:{
    includeSidebar(){
      console.log(this)
      return true
    }
  }
}
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
