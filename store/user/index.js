import axios from "axios"

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
})

export const mutations = {
  SET_USER: (state, payload) => {
    state.authData[payload.field] = payload.value
  },
  UPDATE_AUHT_URL: (state, payload) => {
    state.authUrl = payload === "sign-up"
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.fbAPIKey
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.fbAPIKey
  },
  SET_TOKEN: (state, payload) => {
    state.token = payload
  }
}

export const actions = {
  async authorize({ state, commit }) {
    axios.post(state.authUrl, state.authData)
      .then(res => commit("SET_TOKEN", res.data.idToken))
      .catch(err => console.error(err))
  }
}

export const getters = {
  isAuth: (state) => {
    return !!state.token
  }
}