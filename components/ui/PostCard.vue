<template>
  <li class="post-card">
    <!-- <NuxtLink :to="`/posts/${post.id}`"> -->
      <!-- <h3 class="post-card__title">{{ post.title }}</h3> -->
      <!-- <div class="post-card__img">
        <img :src="post.img" alt="Post image">
        <p>
          <span>{{ post.author.name }}</span>
          <span>{{ post.rating }}</span>
        </p>
      </div>-->
    <!-- </NuxtLink> -->
  </li>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
  .post-card {
    padding: 24px;
    background-color: #bcbabe;
  }
</style>

<script>
export default {
  created() {
    console.log(this.post)
  }
}
</script>
