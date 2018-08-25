import Vue from "vue";
import Vuex from "vuex";
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
    }
  },
  actions: {
    login({commit}, credentials) {
      commit(AUTH_PENDING);
    }
  },
  strict: debug
});
