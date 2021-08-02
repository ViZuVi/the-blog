<template>
  <main class="layout__main posts">
    <h1>Top rated posts</h1>
    <PostList />
  </main>
</template>

<script>
import PostList from "~/components/posts/PostList.vue";
import { mapState } from "vuex";

export default {
  components: {
    PostList,
  },
  created() {
  }
};
</script>
