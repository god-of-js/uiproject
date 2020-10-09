import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import home from "./home/home.js";
import app from "./home/app.js";

Vue.use(Vuex);

export default new Vuex.Store({
  ...state,
  mutations: {},
  actions: {},
  modules: {
    app,
    home
  }
});
