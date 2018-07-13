import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: false,
    path: '',
    loginTitle: '',
    books: [],
    uid: '',
    bid: '',
    listAll: [],
    listBuy: []
  },
  mutations: {
    goBid(state, bid) {
      state.bid = bid
    },
    goCart(state, vm) {
      var uid = state.uid
      var bid = state.bid
      if (!vm.$cookie.get('user')) {
        alert('请先登陆..')
        return;
      }
      vm._http.post('/api/cart/join', {
          uid,
          bid
        })
        .then((result) => {
          switch (result.data.code) {
            case 200:
              alert(result.data.message)
              break;
            case 500:
              alert(result.data.message)
              break;

          }

        }).catch((err) => {
          if (err) throw err
        });
    },
    LoginState(state) {
      state.loginState = !state.loginState
    },
    getUid(state, vm) {
      state.uid = vm.$cookie
        .get("user") ? vm.$cookie
        .get("user")
        .slice(vm.$cookie.get("user").indexOf("uid"))
        .split("=")[1] : '';
    },
    getBooks(state, vm) {
      vm._http
        .get("/api/books")
        .then(result => {
          if (result.data.code == 200) state.books = result.data.vl;
        })
        .catch(err => {
          if (err) throw new Error(err);
        });
    },
    getCartGoods(state, vm) {
      state.listAll = []
      vm._http
        .get(`/api/cart/?uid=${state.uid}`)
        .then(result => {
          var data = result.data;
          if (data.code == 200) {
            data.ods.forEach((e, i) => {
              var cont = data.carts[i].cont
              var list = Object.assign(e[0], {
                cont
              })
              state.listAll.push(list)
            });
          }
        })
        .catch(err => {
          if (err) throw err;
        });
    }
  },
  actions: {

  }
})