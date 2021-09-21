<template>
  <div>
    <h1 class="layout__title">{{ formTitle }}</h1>
    <form class="form" @submit.prevent="$emit('submit-form', editedPost)">
      <div class="form__control-wrapper">
        <label class="form__label" for="post-title">Title</label>
        <input
          id="post-title"
          class="form__input"
          type="text"
          placeholder="enter the post title"
          maxlength="50"
          v-model="editedPost.title"
        />
      </div>
      <div class="form__control-wrapper">
        <label class="form__label" for="post-text">Post text</label>
        <textarea
          id="post-text"
          class="form__input form__input--textarea"
          rows="10"
          minlength="300"
          v-model="editedPost.text"
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
          @change="editedPost.img = $refs.img.files[0]"
        />
      </div>
      <button class="form__button" type="submit">{{ buttonLabel }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostFormCreate",
  props: {
    formTitle: {
      type: String,
      required: false,
      default: () => "New post",
    },
    user: {
      type: Object,
      required: false,
      default: () => {},
    },
    post: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      editedPost: {
        title: "",
        text: "",
        img: "",
      },
    };
  },
  computed: {
    buttonLabel() {
      const urlPathArr = this.$route.path.split("/");
      return urlPathArr[urlPathArr.length - 1] === "edit"
        ? "Save changes"
        : "Create";
    },
  },
  created() {
    if (this.post) {
      this.editedPost = { ...this.post };
    }
  },
};
</script>
