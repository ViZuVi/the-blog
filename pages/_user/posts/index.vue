<template>
    <main class="layout__main posts">
    <h1 class="layout__title">My Posts</h1>
    <PostList :posts="userPosts" />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "~/components/posts/PostList.vue";

export default {
  components: {
    PostList
  },
  computed: {
    ...mapGetters(["userPosts"])
  },
}
</script>