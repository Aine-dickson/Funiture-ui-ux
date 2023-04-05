import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    screen: "general",
    splash: "true",
    page: "",
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
    async signUp(state, user){
      console.log(user)
      try{
        const response = await axios.post("http://localhost:2000/login-data", user)
        state.commit("userUpdate", response)
        console.log(response)
      } catch {
        (err) => console.log(err.message)
      }
    }
  },
  modules: {},
});
