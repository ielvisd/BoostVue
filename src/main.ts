import { createApp } from "vue";
import App from "./App.vue";
import BoostVuePlugin from "./BoostVuePlugin";
import 'uno.css'

const app = createApp(App);
app.use(BoostVuePlugin);
app.mount("#app");
