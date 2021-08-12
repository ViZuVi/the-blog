import axios from "axios";

export const state = () => ({
  posts: [],
  tags: ["travels", "beauty & style", "science", "politics", "arts", "economics", "sport", "nature", "other"]
})

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    return axios.get("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/posts.json")
      .then(res => {
        const postsArr = [];
        for (const key in res.data) {
          postsArr.push({...res.data[key], id: key}) // TODO: refactor
        };
        commit("SET_POSTS", postsArr)
      })
    // commit("SET_POSTS", [
    //   {
    //     id: 1,
    //     author: {
    //       avatar: "",
    //       name: "Kate"
    //     },
    //     rating: 4.5,
    //     date: new Date(),
    //     title: "Some awesome post",
    //     img: require("~/assets/img/bird.jpeg"),
    //     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
    //     comments: [
    //       {
    //         id: 1,
    //         date: new Date(),
    //         comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
    //         author: {
    //           avatar: "",
    //           name: "John"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     author: {
    //       avatar: "",
    //       name: "Kate"
    //     },
    //     rating: 4.5,
    //     date: new Date(),
    //     title: "Some awesome post",
    //     img: require("~/assets/img/winter.jpeg"),
    //     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
    //     comments: [
    //       {
    //         id: 1,
    //         date: new Date(),
    //         comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
    //         author: {
    //           avatar: "",
    //           name: "John"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 3,
    //     author: {
    //       avatar: "",
    //       name: "Kate"
    //     },
    //     rating: 4.5,
    //     date: new Date(),
    //     title: "Some awesome post",
    //     img: require("~/assets/img/car.jpg"),
    //     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
    //     comments: [
    //       {
    //         id: 1,
    //         date: new Date(),
    //         comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
    //         author: {
    //           avatar: "",
    //           name: "John"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 4,
    //     author: {
    //       avatar: "",
    //       name: "Kate"
    //     },
    //     rating: 4.5,
    //     date: new Date(),
    //     title: "Some awesome post",
    //     img: require("~/assets/img/cupcake.jpeg"),
    //     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
    //     comments: [
    //       {
    //         id: 1,
    //         date: new Date(),
    //         comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
    //         author: {
    //           avatar: "",
    //           name: "John"
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     id: 5,
    //     author: {
    //       avatar: "",
    //       name: "Kate"
    //     },
    //     rating: 4.5,
    //     date: new Date(),
    //     title: "Some awesome post",
    //     img: require("~/assets/img/netherlands.jpeg"),
    //     text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi itaque! Ducimus et magnam velit ea inventore voluptates cum nobis temporibus! Temporibus, qui nisi a earum soluta nesciunt repudiandae ullam!",
    //     comments: [
    //       {
    //         id: 1,
    //         date: new Date(),
    //         comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestiae tempore tenetur velit. Tenetur perferendis accusamus, in laboriosam at culpa eos esse quaerat, iste cum debitis voluptatem numquam velit labore!",
    //         author: {
    //           avatar: "",
    //           name: "John"
    //         }
    //       }
    //     ]
    //   },
    // ])
  }
}

export const getters = {
  loadedPosts: (state) => state.posts
}
