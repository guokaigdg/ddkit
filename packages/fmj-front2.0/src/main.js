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
