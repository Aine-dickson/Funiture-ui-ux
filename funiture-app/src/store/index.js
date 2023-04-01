import { createStore } from "vuex";

export default createStore({
  state: {
    screen: "general"
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
