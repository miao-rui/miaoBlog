import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
  },
  actions: {
    settoken(state, token) {
      state.token = token;
      localStorage.setItem('token', token)
    }
  },
  modules: {
  }
})
