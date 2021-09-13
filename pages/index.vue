<template>
  <main class="layout__main posts">
    <h1 class="layout__title">What to read</h1>
    <PostList :posts="loadedPosts" />
    <button @click="$router.push(`posts/testuser/edit`)">edit</button>
    <h1>{{ user.name }}</h1>
  </main>
</template>

<script>
import PostList from "~/components/posts/PostList.vue";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapGetters(["loadedPosts"]),
    ...mapState("user", ["user"])
  },
};
</script>
