import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/scss/auth.scss'
import './assets/scss/tailwind.scss'
import VueGoodTablePlugin from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'
// import jQuery from 'jQuery'
const jQuery = require('jquery')

declare global {
  interface Window {
    jQuery: any; // 👈️ turn off type checking
    $: any
  }
}

window.jQuery = jQuery;
var $ = window.jQuery;
window.$ = $;



if (localStorage.users === undefined) {
    let users = [
        {
            name: "dashcode",
            email: "dashcode@gmail.com",
            password: "dashcode",
        },
    ];
    localStorage.setItem("users", JSON.stringify(users));
}
// App.config.globalProperties.$store = store;
const app= createApp(App)
// app.config.globalProperties.$store = store;
app.provide("$store", store);
app.use(VueGoodTablePlugin)
app.use(store).use(router).mount("#app");
