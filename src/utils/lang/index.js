import Vue from 'vue';
import VueI18n from 'vue-i18n';

import elEnLocale from 'element-ui/lib/locale/lang/en';

import enLocale from './en';

import Cookies from 'js-cookie';

Vue.use(VueI18n);

const messages = {

  en: {
    ...enLocale,
    ...elEnLocale
  },
};
const i18n = new VueI18n({
  locale: Cookies.get('lang') || 'zh-CN',// store.state.app.language, // set locale
  messages // locale messages
});

export default i18n;
