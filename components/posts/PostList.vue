<template>
  <ul class="posts__list">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </ul>
</template>

<script>
import PostCard from "~/components/ui/PostCard.vue";

export default {
  name: "PostList",
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style>
.posts__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5em;
  align-items: center;
  justify-items: center;
}
</style>
