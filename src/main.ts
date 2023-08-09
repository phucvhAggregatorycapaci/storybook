import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/scss/auth.scss'
import './assets/scss/tailwind.scss'
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
app.use(store).use(router).mount("#app");
