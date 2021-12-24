const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//
const isProd = process.env.NODE_ENV === 'production'

// const productionGzipExtensions = ['js', 'css']；

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'moment': 'moment',
  // 'echarts': 'echarts',
  'element-ui': 'ELEMENT',
  // 'vue-antd-ui': 'antd'
}





// vue.config.js
module.exports = {

  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', //

  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    open: true,
    port: 8886,
    proxy: { //
      '/api': {
        target: `http://192.168.8.253:8080`,
        ws: false,
        changeOrigin: true
      },
    }
  },
  css: { //
    extract: false, //
    requireModuleExtension: true, //
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/color.scss";`
      }
    }
  },

  assetsDir: 'static',
  chainWebpack: config => {

    config.plugins.delete('prefetch')
    // config.plugin('webpack-bundle-analyzer')
    //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);

  },

  outputDir: 'dist',

  productionSourceMap: process.env.NODE_ENV !== 'production',

  configureWebpack: config => {

    config.externals = externals;

    if(isProd){

      config.plugins.push(new UglifyJsPlugin({
        uglifyOptions:{
          ie8: false,
          parallel: true,
          warnings: false,
          sourceMap: false,

          output: {
            comments: false,
            beautify: false,
          },
          compress: {
            drop_debugger: true,
            drop_console: true,
            // pure_funcs: ['console.log']
          },
        }
      }))
    }
  },




  pluginOptions: {
    // ...
  },
}
