import Vue from "vue";
import { AuthUserDTO } from "@/services/UserDTO";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth_user: undefined as AuthUserDTO | undefined,
  },
  getters: {
    auth_user_email: (state) => state.auth_user?.email,
    auth_user_token: (state) => state.auth_user?.auth_token,
    auth_user: (state) => state.auth_user,
  },
  mutations: {
    storeAuthUser(state, user: AuthUserDTO | undefined) {
      state.auth_user = user;
    },
  },
  actions: {
    setAuthUser(context, user: AuthUserDTO | undefined) {
      context.commit("storeAuthUser", user);
      if (user) {
        window.localStorage.setItem("auth_token", user.auth_token);
      } else {
        window.localStorage.removeItem('auth_token');
      }
    },
  },
  plugins: [createPersistedState()],
});
