import axios from "axios";
import Cookie from "js-cookie";

export const state = () => ({
  user: {
    id: null,
    name: "",
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
  SET_USER: (state, payload) => {
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
  }
};

export const actions = {
  async authorize({ state, commit, dispatch }) {
    axios.post(state.authUrl, state.authData)
      .then(res => {
        commit("SET_TOKEN", res.data.idToken);
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("tokenExpiration", new Date().getTime() + Number(res.data.expiresIn)) * 1000;
        Cookie.set("jwt", res.data.idToken);
        Cookie.set("expirationDate", new Date().getTime() + Number(res.data.expiresIn) * 1000);
      })
      .catch(err => console.error(err))
  },
  initAuth({ commit, dispatch }, request) {
    let token;
    let expirationDate;
    if (request) {
      if (request.headers.cookie) {
        const jwtCookie = request.headers.cookie.split(";").find(el => el.trim().startsWith("jwt="));
        const jwtExpirationDate = request.headers.cookie.split(";").find(el => el.trim().startsWith("expirationDate="));
        if (jwtCookie) {
          token = jwtCookie.split("=")[1];
          expirationDate = jwtExpirationDate.split("=")[1];
        }
      }
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");

    };
    if (new Date().getTime() > Number(expirationDate) || !token) {
      dispatch("logout");
    }
    commit("SET_TOKEN", token);
  },
  logout({ commit }) {
    commit("CLEAR_TOKEN");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
  }
};

export const getters = {
  isAuth: (state) => {
    return !!state.token;
  }
};
