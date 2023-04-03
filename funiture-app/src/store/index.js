import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    screen: "general",
    splash: "true",
  },
  getters: {},
  mutations: {
    userUpdate(state, payload){
      state.user = payload
    },
    screenControl(state, payload){
      state.screen = payload
    },
    splashControl(state, payload){
      state.splash = payload
    },
  },
  actions: {
    async signUp(){
      try{

      } catch {

      }
    }
  },
  modules: {},
});
