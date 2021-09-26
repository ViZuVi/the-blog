<template>
  <main class="layout__main posts">
    <h1 class="layout__title">Favourite Posts</h1>
    <PostList :posts="favouritePosts" />
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostList from "~/components/posts/PostList.vue";

export default {
  middlware: "auth",
  components: { PostList },
  computed: {
    ...mapState(["favouritePosts"]),
  },
  methods: {
    ...mapActions(["fetchFavourites"]),
  },
  created() {
    this.fetchFavourites();
  },
};
</script>