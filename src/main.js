import Vue from "vue";

import i18n from "@/utils/lang";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/action";
import bus from "@/utils/bus";

import "@/utils/screen";
import VueClipboard from "vue-clipboard2";
import moment from "moment";
import "@/assets/css/public.scss";

import Antd from "ant-design-vue";
import { message } from "ant-design-vue";

Vue.prototype.$bus = bus;
Vue.use(Antd);
Vue.prototype.$coming = () => message.info("Coming Soon!");
Vue.prototype.$moment = moment;

Vue.use(VueClipboard);
Vue.config.productionTip = false;

const ElementUI = window.ELEMENT;
console.log(ElementUI);
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});









new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
