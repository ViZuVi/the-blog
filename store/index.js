import axios from "axios";

export const state = () => ({
  posts: [],
  favouritePosts: [],
  tags: ["travels", "beauty & style", "science", "politics", "arts", "economics", "sport", "nature", "other"],
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  ADD_POST(state, newPost) {
    state.posts = [...state.posts, newPost];
  },
  EDIT_POST(state, editingPost) {
    const index = state.posts.findIndex(post => post.id === editingPost.id);
    state.posts[index] = editingPost;
  },
  DELETE_POST(state, postId) {
    const post = state.posts.find(post => post.id === postId);
    const index = state.posts.indexOf(post);
    if (index > -1) {
      state.posts.splice(index, 1);
    }
  },
  SET_FAVOURITES(state, posts) {
    state.favouritePosts = posts;
  },
  ADD_TO_FAVOURITES(state, post) {
    state.favouritePosts.push(post)
  },
  REMOVE_FROM_FAVOURITES(state, post) {
    state.favouritePosts.filter(el => el.id === post.id)
  },
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    return axios.get("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/posts.json")
      .then(res => {
        const postsArr = [];
        for (const key in res.data) {
          postsArr.push({ ...res.data[key], id: key }); // TODO: refactor
        };
        commit("SET_POSTS", postsArr);
      })
  },
  addPost({ commit, rootState }, post) {
    // TODO: use foemData below instead of fakes when firebase storage will be used for images
    // let formData = new FormData();
    // formData.append("post", newPost);
    const fakeImg = "https://images.ctfassets.net/rporu91m20dc/3i03iFFoIHOgToEuIwXqNZ/35737828d0d6524c055b80ae9645bbaf/the-elder-scrolls-v--skyrim---special-edition-hero-img?q=70&fm=webp";
    const fakePost = {
      ...post,
      date: new Date(),
      author: {
        id: rootState.user.user.id,
        name: rootState.user.user.name,
      },
      img: fakeImg,
    };
    axios.post("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/posts.json?auth=" + rootState.user.token, fakePost, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((res) => commit("ADD_POST", { ...fakePost, id: res.data.name }))
      .catch((err) => console.error(err));
  },
  deletePost({ commit, rootState }, postId) {
    axios.delete("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/posts/" + postId + ".json/?auth=" + rootState.user.token)
      .then((_res) => commit("DELETE_POST", postId))
      .catch((err) => console.error(err));
    // TODO: delete also from favourites if is there
  },
  editPost({ commit, rootState }, post) {
    // TODO: display new data on main page after updating post
    axios.put("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/posts/" + post.id + ".json/?auth=" + rootState.user.token, post)
      .then((_res) => commit("EDIT_POST", post))
      .catch((err) => console.error(err));
  },
  fetchFavourites({ commit, rootState }) {
    axios.get("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/" + rootState.user.user.id + "/favourites.json?auth=" + rootState.user.token)
      .then((res => {
        const favouritesArr = [];
        for (const key in res.data) {
          // TODO: removing from favourites is not working
          favouritesArr.push({ ...res.data[key], favouriteId: key });
        };
        commit("SET_FAVOURITES", favouritesArr);
      }))
      .catch((err) => console.error(err));
  },
  addToFavourites({ commit, rootState }, post) {
    axios.post("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/" + rootState.user.user.id + "/favourites.json?auth=" + rootState.user.token, post)
      .then(() => commit("ADD_TO_FAVOURITES", post))
      .catch((err) => console.error(err));
  },
  removeFromFavourites({ commit, rootState }, post) {
    axios.delete("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/" + rootState.user.user.id + "/favourites/" + post.id + ".json?auth=" + rootState.user.token)
      .then(() => commit("REMOVE_FROM_FAVOURITES", post))
      .catch((err) => console.error(err));
  }
};

export const getters = {
  loadedPosts: (state) => state.posts,
  userPosts: (state) => state.posts.filter(post => post.author.id === state.user.user.id),
};
