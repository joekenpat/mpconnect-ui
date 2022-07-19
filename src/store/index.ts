import Vue from "vue";
import { AuthUserDTO } from "@/services/UserDTO";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth_user: undefined as AuthUserDTO | undefined,
    loading: false,
  },
  getters: {
    auth_user_email: (state) => state.auth_user?.email,
    auth_user_token: (state) => state.auth_user?.auth_token,
    auth_user: (state) => state.auth_user,
    loading: (state) => state.loading,
  },
  mutations: {
    storeAuthUser(state, user: AuthUserDTO | undefined) {
      state.auth_user = user;
    },
    storeLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },
  actions: {
    setAuthUser({commit}, user: AuthUserDTO | undefined) {
      commit("storeAuthUser", user);
      if (user) {
        window.localStorage.setItem("auth_token", user.auth_token);
      } else {
        window.localStorage.removeItem("auth_token");
      }
    },
    setLoading({commit}, loading: boolean) {
      commit("storeLoading", loading);
    },
  },
  plugins: [createPersistedState()],
});
