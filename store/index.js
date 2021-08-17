import axios from "axios";

export const state = () => ({
  posts: [],
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
    state[index] = editingPost;
  },
  DELETE_POST(state, postId) {

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
  addPost({ commit }, post) {
    const newPost = {
      ...post,
      date: new Date(),
    }
    axios.post("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/posts.json", newPost)
      .then((res) => commit("ADD_POST", { ...newPost, id: res.data.name }))
      .catch((err) => console.error(err));
  }
};

export const getters = {
  loadedPosts: (state) => state.posts,
};Í
