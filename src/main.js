import Vue from "vue";
import App from "./App.vue";
import 'jquery';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import "./assets/style.css";

export const eventBus = new Vue();

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
