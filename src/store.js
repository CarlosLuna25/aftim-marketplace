import Vue from "vue";
import Vuex from "vuex";
import router from './router';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    user:{
      loggedIn:false,
      data:null,
    },
    drawer:false,
    dialog:false,
    producto:{},
    items: [
      { title: "Promociones", icon: "monetization_on" },
      { title: "Restaurantes", icon: "restaurant" },
      { title: "Tiendas", icon: "store_mall_directory" },
      { title: "Bebidas", icon: "local_bar" },
    ],
  },

  getters: {
    user(state){
      return state.user;
    }
  },

  mutations: {
    SET_DRAWER(state,val){
      if(val == true){
        state.drawer = true;
      }else{
        state.drawer = false;
      }
    },

    SET_DIALOG(state,val){
      if(val){
        state.dialog=true;
      }else{
        state.dialog=false;
      }
    },

    SET_PRODUCTO(state,val){
      state.producto=val;
    },

    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },

    SET_USER(state, data) {
      state.user.data = data;
    },
  },

  actions: {
    setDrawer({commit},val){
      commit("SET_DRAWER",val);
    },

    setDialog({commit},val){
      commit("SET_DIALOG",val);
    },

    setProducto({commit},val){
      commit("SET_PRODUCTO",val);
    },

    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
