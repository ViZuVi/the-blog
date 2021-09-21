<template>
  <main class="layout__main new-post">
    <PostFormCreate formTitle="Edit post" :post="loadedPost" @submit-form="savePost" />
  </main>
</template>

<script>
import PostFormCreate from "~/components/posts/PostFormCreate.vue";
import { mapActions } from "vuex";
import axios from "axios";

export default {
  components: { PostFormCreate },
  middleware: "auth",
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-blog-a7909-default-rtdb.firebaseio.com/posts/${context.params.id}.json`
      )
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.id },
        };
      })
      .catch((e) => context.error());
  },
  methods: {
    ...mapActions(["editPost"]),
    savePost(e) {
      this.editPost(e).then(() => this.$router.push("/"));
    }
  }
};
</script>