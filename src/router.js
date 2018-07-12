import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue';
import Main from './views/Main.vue';
import Login from './views/Login.vue';
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
          path: '/',
          name: 'home',
          component: Main
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/enroll',
      name: 'enroll',
      component: Login
    }
  ]
})


export default router