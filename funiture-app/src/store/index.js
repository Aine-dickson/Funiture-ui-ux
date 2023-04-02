import { createStore } from "vuex";

export default createStore({
  state: {
    screen: "general",
    splash: "true"
  },
  getters: {},
  mutations: {
    screenControl(state, payload){
      state.screen = payload
    },
    splashControl(state, payload){
      state.splash = payload
    }
  },
  actions: {},
  modules: {},
});
