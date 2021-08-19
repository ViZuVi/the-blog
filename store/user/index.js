import axios from "axios"

export const state = () => ({
  isAuth: false,
  user: {
    id: null,
    name: "",
    avatar: "",
  },
  authData: {
    email: "",
    password: "",
    returnSecureToken: true,
  }
})

export const mutations = {
  SET_USER: (state, payload) => {
    state.authData[payload.field] = payload.value
  }
}

export const actions = {
  signIn({ state }) {
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.fbAPIKey, state.authData)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
}