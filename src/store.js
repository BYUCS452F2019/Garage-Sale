import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    items: []
  },
  getters: {

  },
  mutations: {
    updateUser ( state, payload ) {
      state.user = payload;
    }
  },
  actions: {
    changePassword ({ commit }, { oldPassword, newPassword }) {

    },
    async register ({ commit }, { email, password }) {
      const res = await axios({
        method: 'post',
        data: { email, password },
        url: 'http://localhost:3000/register'
      });
      console.log(res);
      commit('updateUser', { email, name: '', phone: '' })
    },
    updateProfile ({ commit }, { email, name, phone }) {

    },
    async userRegister({ commit, dispatch, getters, state }, {user_id, password, firstName, lastName, email, id_photo, validated}) {
      console.log("In store.js");
      const res = await axios({
        method: 'post',
        data: {user_id, password, firstName, lastName, email, id_photo, validated},
        url: 'http://localhost:4000/register'
      });
      console.log(res);
    },
    async userLogin ({ commit, dispatch, getters, state }, { email, password }) {
      const res = await axios({
        method: 'put',
        data: { email, password },
        url: 'http://localhost:3000/login'
      })
      commit('updateUser', { email: email, name: 'DummyData', phone: '555-555-5555'})
    },
    userLogout ({ commit }) {

    }
  }
})
