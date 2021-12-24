
const sys = {
  state: {
    baseConfig: {
    },

    blockBrowser: {

    },
    devConfig: {

      area: "dev",

    },
    proConfig: {
      area: 'production',
    },

    isMobile: false,

  },
  mutations: {
    SET_BASECONFIG: (state, baseConfig) => {
      state.baseConfig = baseConfig;
    },
    SET_IS_MOBILE: (state, isMobile) => {
      if(isMobile!==state.isMobile) {
        state.isMobile = isMobile;
      }
    }
  },
  actions: {
    setBaseConfig({ commit }, baseConfig) {
      commit('SET_BASECONFIG', baseConfig);
    }
  }
};

export default sys;
