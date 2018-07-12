import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookie from 'vue-cookie';
import jquery from 'jquery';
import axios from 'axios';
import md5 from 'md5';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.use(VueCookie)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.prototype.$ = jquery
Vue.prototype._http = axios;
Vue.prototype._md5 = md5;


router.beforeEach((to, from, next) => {
  store.state.path = from.path;
  if (to.path == '/login') {
    store.state.loginTitle = '欢迎登陆'
  } else if (to.path == '/enroll') {
    store.state.loginTitle = '欢迎注册'
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')