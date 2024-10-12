import "./assets/main.css";
import 'flag-icons/css/flag-icons.min.css';
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import Aura from "@primevue/themes/aura";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import router from "./router";
import fr from "./languages/fr.json";
import en from "./languages/en.json";

const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "en", 
  messages: {
    fr,
    en,
  },
});

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
