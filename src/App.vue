<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import { mapState } from 'vuex';


export default {
  name: 'App',
  computed: {
    ...mapState({
      devConfig: state => state.sys.devConfig, //
      proConfig: state => state.sys.proConfig, //
    }),
  },
  data() {
    return {
      priceTimer: null,
    }
  },
  watch: {
  },

  created() {

  },
  mounted(){
    // this.handleEnvSet();
  },
  beforeDestroy: function () {

  },
  methods: {

    handleEnvSet() {
      let config = this.baseConfig;
      console.log("===ENV==="+process.env.NODE_ENV);
      if(process.env.NODE_ENV === 'development') {
        sessionStorage.setItem('ENV', 'dev')
        config = this.devConfig;
      }else if(process.env.NODE_ENV === 'production'){
        sessionStorage.setItem('ENV', 'production')
        config = this.proConfig;
      }else { // useless
        sessionStorage.setItem('ENV', 'test')
        config = this.testConfig;
      }

      console.log(config);

      this.$store.dispatch('setBaseConfig', config)
    }
  },
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', Arial, sans-serif;
  background: #fff;
  color: #333;
}
#app {
  //max-width: 10rem;
  margin: auto;
  height: 100%;
  /deep/ .el-loading-spinner .path {
    stroke: $color-main;
  }
}
p {
  margin: 0;
}
</style>
