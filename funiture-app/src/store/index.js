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
    async signUp(state, userObject){
      try{
        const response = await axios.post("http://localhost:2000/signup", userObject)
        state.commit("userUpdate", response.data)
      } catch {
        err => { console.log(err.message) }
      }
    },
    async login(state, userObject){
      try{
        const response = await axios.post('http://localhost:2000/login', userObject)
        state.commit("userUpdate", response.data)
      } catch {
        err => { console.log(err.message) }
      }
    }
  },
  modules: {},
});
