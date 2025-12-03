import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./style.scss";

createApp(App).mount("#app");

const app = createApp(App);
app.use(router);
app.mount("#app");
