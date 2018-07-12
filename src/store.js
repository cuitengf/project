import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: false,
    path: '',
    loginTitle: '',
    books:[]
  },
  mutations: {
    LoginState(state){
      state.loginState = !state.loginState
    },
    getBooks(state,vm) {
      vm._http
        .get("/api/books")
        .then(result => {
          if (result.data.code == 200) state.books = result.data.vl;
        })
        .catch(err => {
          if (err) throw new Error(err);
        });
    },
  },
  actions: {
    
  }
})
