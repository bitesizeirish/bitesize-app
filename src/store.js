import Vue from "vue";
import Vuex from "vuex";
import { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED, LOGOUT } from './store/mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  strict: debug
});
