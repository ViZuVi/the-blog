<template>
  <main class="layout__main posts">
    <h1 class="layout__title">
      My Posts
      <NuxtLink :to="`/${$route.params.user}/new`" class="posts__add-btn"
        >Add new</NuxtLink
      >
    </h1>
    <PostList :posts="userPosts" />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "~/components/posts/PostList.vue";

export default {
  components: {
    PostList,
  },
  computed: {
    ...mapGetters(["userPosts"]),
  },
};
</script>

<style lang="scss" scoped>
.posts__add-btn {
  font-weight: normal;
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid $blue;
  padding: 8px 12px;
  margin-left: 12px;

  &:hover {
    color: #ffffff;
    background-color: $marine;
    border-color: $marine;
    opacity: 1;
  }
}
</style>