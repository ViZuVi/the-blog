<template>
  <main class="layout__main">
    <h1 class="layout__title">All posts</h1>
    <PostList :posts="loadedPosts" />
  </main>
</template>

<script>
import PostList from "~/components/posts/PostList.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapGetters(["loadedPosts"])
  },
  middleware: "auth",
};
</script>
