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
          ref="img"
          @change="post.img = $refs.img.files[0]"
        />
      </div>
      <button class="form__button" type="submit">Create</button>
    </form>
  </main>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data() {
    return {
      post: {
        title: "",
        text: "",
        img: "",
      },
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    createPost() {
      this.addPost(this.post)
        .then(() => this.$router.push("/"));
    },
  },
  middleware: "auth",
};
</script>
