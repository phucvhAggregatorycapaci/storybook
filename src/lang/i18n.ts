import { createI18n } from "vue-i18n";
import vnMessage from './vn.json';
import enMessage from './en.json';


// Vue.use(VueI18n);


const messages = {
    vn: vnMessage,
    en: enMessage,
};

// let locale = util.getSavedLocale();
const i18n = createI18n({
    locale: 'vn', // set locale
    messages,
    fallbackLocale: 'en',
});

export default i18n;
