/*
 * @Author: your name
 * @Date: 2021-04-22 00:14:49
 * @LastEditTime: 2021-04-22 02:34:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NTGMJ/packages/fmj-front2.0/src/main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
// import Router from 'vue-router' 
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'


import router from './router'

Vue.config.productionTip = false
// Vue.use(Router)  //Vue全局使用Router
Vue.use(ElementUI);

// render: h => h(App),
new Vue({
  el: '#app',
  router,
  render: h =>h(App)
}).$mount("#app")

