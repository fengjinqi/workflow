import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './module/user'
import shop from './module/shops'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({

    storage:window.sessionStorage

  })],
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    shop

  }
})
