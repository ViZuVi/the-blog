<template>
  <main class="layout__main new-post">
    <h1 class="layout__title">New post</h1>
    <form class="form" @submit.prevent="createPost">
      <div class="form__control-wrapper">
        <label class="form__label" for="post-title">Title</label>
        <input
          id="post-title"
          class="form__input"
          type="text"
          placeholder="enter the post title"
          maxlength="50"
          v-model="post.title"
        />
      </div>
      <div class="form__control-wrapper">
        <label class="form__label" for="post-text">Post text</label>
        <textarea
          id="post-text"
          class="form__input form__input--textarea"
          rows="10"
          minlength="300"
          v-model="post.text"
        />
      </div>
      <div class="form__control-wrapper">
        <label class="form__label" for="post-img">Post image</label>
        <input
          id="post-img"
          class="form__input"
          type="file"
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <button class="form__button" type="submit">Create</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: {
        title: "",
        text: ""
      }
    }
  },
  methods: {
    createPost() {
      axios.post("https://nuxt-blog-a7909-default-rtdb.firebaseio.com/post.json", this.post)
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
  }
};
</script>
