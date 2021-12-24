import {
  SET_LANG,
  SET_WALLET,
  SET_IS_WALLET,
  SET_IS_GUIDE,
  SET_IS_NO_WALLET,
} from "../mutation-types";
const app = {
  state: {

    language: localStorage.getItem("language") || "en",

    theme: localStorage.getItem("theme") || "theme-278EDA",

    defAddress: localStorage.getItem("defAddress") || {},
    userInfo: localStorage.getItem("userInfo") || {},
    inited: false,
    noWallet: false,

    sysInfo: {},
    approvedBalance: 0,
    inviter: "",
    usdtBalance: 0,

    lang: "en",
    wallet: "",
    is_wallet: false,
    is_guide: false,
    is_no_wallet: false,
    tab: 1,
    inviteAddress: "",
    invAddress: "",
  },
  mutations: {
    SET_INV_ADDRESS: (state, payload) => {
      state.invAddress = payload;
    },
    SET_NO_WALLET: (state, noWallet) => {
      state.noWallet = noWallet;
    },
    SET_USDT_BALANCE: (state, usdtBalance) => {
      state.usdtBalance = usdtBalance;
    },
    SET_INVITER: (state, inviter) => {
      state.inviter = inviter;
    },
    SET_APPROVED_BALANCE: (state, balance) => {
      state.approvedBalance = balance;
    },
    SET_SYSINFO: (state, sysInfo) => {
      state.sysInfo = sysInfo;
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_INITED: (state, sts) => {
      state.inited = sts;
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      localStorage.setItem("language", language);
    },
    SET_THEME: (state, theme) => {
      state.theme = theme;
      localStorage.setItem("theme", theme);
      // localStorage.removeItem('tradingview.chartproperties');
    },
    SET_DEF_ADDRESS: (state, defAddress) => {
      state.defAddress = defAddress;
      localStorage.setItem("defAddress", defAddress);
    },
    SET_INVITE_ADDRESS: (state, inviteAddress) => {
      state.inviteAddress = inviteAddress;
      localStorage.setItem("inviteAddress", inviteAddress);
    },
    SET_USER_INFO: (state, info) => {
      state.userInfo = info;
      localStorage.setItem("userInfo", info);
    },
    SET_TAB: (state, tab) => {
      state.tab = tab;
      localStorage.setItem("tab", tab);
    },
    [SET_LANG](state, lang) {
      state.lang = lang;
    },
    [SET_WALLET](state, is_imtoken) {
      state.is_imtoken = is_imtoken;
    },
    [SET_IS_WALLET](state, is_wallet) {
      state.is_wallet = is_wallet;
    },
    [SET_IS_GUIDE](state, payload) {
      state.is_guide = payload;
    },
    [SET_IS_NO_WALLET](state, payload) {
      state.is_no_wallet = payload;
    },
  },
  getters: {
    tab: (state) => {
      return state.tab;
    },
    lang: (state) => {
      return state.lang;
    },
    is_imtoken: (state) => {
      return state.is_imtoken;
    },
    is_wallet: (state) => {
      return state.is_wallet;
    },
  },
  actions: {
    setUSDTBalance({ commit }, usdtBalance) {
      commit("SET_USDT_BALANCE", usdtBalance);
    },
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
    setTheme({ commit }, theme) {
      commit("SET_THEME", theme);
    },
    setUserInfo({ commit }, userInfo) {
      commit("SET_USERINFO", userInfo);
    },
    setSysInfo({ commit }, sysInfo) {
      commit("SET_SYSINFO", sysInfo);
    },
    update_env: function({ commit }, { wallet, is_wallet }) {
      // alert(is_wallet+"update_env"+ JSON.stringify(wallet))
      commit(SET_WALLET, wallet);
      commit(SET_IS_WALLET, is_wallet);
    },
  },
};

export default app;
