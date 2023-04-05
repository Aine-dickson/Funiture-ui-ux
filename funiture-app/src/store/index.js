import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      userName: "Aine Dixon"
    },
    screen: "general",
    splash: "true",
    page: "",
    pages: ["home", "wishlist", "scan", "account"]
  },
  getters: {
  },
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
    pageManager(state, payload){
      state.page = payload
    }
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
