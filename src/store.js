import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import api from "./utils/api-client"
import { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED, LOGOUT } from './store/mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: null, // also seen initialised as {}...
  },
  getters: {
    authStatus: state => state.status,
    isLoggedIn: state => !!state.token
  },
  mutations: {
    // ES2015 computed property name feature
    [AUTH_PENDING](state) {
      state.status = 'pending';
    },
    [AUTH_SUCCESS](state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    }
  },
  actions: {
      login({commit}, credentials) {
      commit(AUTH_PENDING);
      api.post("/auth/token", credentials)
      .then(response => {
        commit(AUTH_SUCCESS, response.data.token, response.data.user);
      })
      .catch(console.log("Error!"));
    }
  },
  strict: debug
});
