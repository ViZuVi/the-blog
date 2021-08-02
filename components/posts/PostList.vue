<template>
  <ul class="posts__list">
    <PostCard v-for="post in posts" :key="post.id" />
  </ul>
</template>

<script>
import PostCard from "~/components/ui/PostCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    PostCard,
  },
  computed: {
    ...mapState(["posts"]),
  },
  created() {
    // console.log(this.$store.state)
    // console.log(this.posts)
  },
};
</script>
