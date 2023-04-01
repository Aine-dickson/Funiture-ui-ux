import { createStore } from "vuex";

export default createStore({
  state: {
    screen: "derived"
  },
  getters: {},
  mutations: {
    screenControl(state, payload){
      state.screen = payload
    }
  },
  actions: {},
  modules: {},
});
