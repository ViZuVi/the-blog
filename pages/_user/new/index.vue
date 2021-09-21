<template>
  <main class="layout__main new-post">
    <PostFormCreate
      formTitle="New post"
      :user="user"
      @create-post="createPost"
    />
  </main>
</template>

<script>
import PostFormCreate from "~/components/posts/PostFormCreate.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    PostFormCreate,
  },
  middleware: "auth",
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    ...mapActions(["addPost"]),
    createPost(e) {
      this.addPost(e).then(() => this.$router.push("/"));
    },
  },
};
</script>
