module.exports = {
  mode: "universal",
  css: [
    "~/assets/css/fonts.scss",
    "~/assets/css/variables.scss",
    "~/assets/css/common.scss",
    "~/assets/css/nuxt.scss",
    "~/assets/css/form.scss",
  ],
  head: {
    title: "The Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "The most interesting blog" }
    ],
    // link: {rel: "icon", type: "image/x-icon", href: "favicon.ico"}
  },
  plugins: [],
  modules: [],
  loading: { color: "#ffffff", height: "4px", duration: 5000 },
  transition: {
    // TODO: add transition
  },
  env: {
    fbAPIKey: "AIzaSyCPpquaOABF18qVSmGe_X28pzqc3PPzOn8"
  }
}