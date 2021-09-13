import axios from "axios";
import Cookie from "js-cookie";

export const state = () => ({
  user: {
    id: null,
    name: "Test",
    avatar: "",
  },
  authData: {
    email: "",
    password: "",
    returnSecureToken: true,
  },
  authUrl: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.fbAPIKey,
  token: null,
});

export const mutations = {
  SET_AUTH_DATA: (state, payload) => {
    state.authData[payload.field] = payload.value;
  },
  UPDATE_AUHT_URL: (state, payload) => {
    state.authUrl = payload === "sign-up"
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.fbAPIKey
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.fbAPIKey;
  },
  SET_TOKEN: (state, payload) => {
    state.token = payload;
  },
  CLEAR_TOKEN: (state) => {
    state.token = null;
  },
  SET_USER: (state, payload) => {
    state.user = payload;
  },
};

export const actions = {
  async authorize({ state, commit, dispatch }) {
    axios.post(state.authUrl, state.authData)
      .then(res => {
        const user = {
          id: res.data.localId,
          name: res.data.email,
          // TODO: add name instead of email, add avatar
          avatar: "",
        }
        commit("SET_USER", user);
        commit("SET_TOKEN", res.data.idToken);
        localStorage.setItem("userId", user.id)
        localStorage.setItem("userName", user.name)
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("tokenExpiration", new Date().getTime() + Number(res.data.expiresIn) * 1000);
        Cookie.set("userId", user.id);
        Cookie.set("userName", user.name);
        Cookie.set("jwt", res.data.idToken);
        Cookie.set("expirationDate", new Date().getTime() + Number(res.data.expiresIn) * 1000);
      })
      .catch(err => console.error(err))
  },
  initAuth({ commit, dispatch }, request) {
    let token;
    let expirationDate;
    let userId;
    let userName;
    if (request) {
      if (request.headers.cookie) {
        const jwtCookie = request.headers.cookie.split(";").find(el => el.trim().startsWith("jwt="));
        const jwtExpirationDate = request.headers.cookie.split(";").find(el => el.trim().startsWith("expirationDate="));
        const userIdCookie = request.headers.cookie.split(";").find(el => el.trim().startsWith("userId="));
        const userNameCookie = request.headers.cookie.split(";").find(el => el.trim().startsWith("userName="));
        if (jwtCookie) {
          token = jwtCookie.split("=")[1];
          expirationDate = jwtExpirationDate.split("=")[1];
          userId = userIdCookie.split("=")[1];
          userName = userNameCookie.split("=")[1];
        }
      }
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
      userId = localStorage.getItem("userId");
      userName = localStorage.getItem("userName");
    };
    if (new Date().getTime() > Number(expirationDate) || !token) {
      dispatch("logout");
      return;
    }
    const user = {
      id: userId,
      name: userName,
      avatar: ""
    }
    commit("SET_TOKEN", token);
    commit("SET_USER", user);
  },
  logout({ commit }) {
    commit("CLEAR_TOKEN");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("userId")
      localStorage.removeItem("userName")
    }
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    Cookie.remove("userId");
    Cookie.remove("userName");
  }
};

export const getters = {
  isAuth: (state) => {
    return !!state.token;
  }
};
