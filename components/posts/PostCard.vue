<template>
  <li class="post-card">
    <NuxtLink class="post-card__link" :to="`/posts/${post.id}`">
      <h3 class="post-card__title">{{ post.title }}</h3>
      <div class="post-card__wrapper">
        <div class="post-card__img-wrapper">
          <img class="post-card__img" :src="post.img" alt="Post image" />
        </div>
        <p class="post-card__text">
          <!-- <span>Author: {{ post.author.name }}</span>
          <span>{{ post.rating }}</span> -->
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-card {
  padding: 0;
  background-color: #f1f1f2;
  width: 280px;
  max-height: 360px;
  margin-bottom: 24px;
}
.post-card:not(:last-child) {
  margin-right: 24px;
}
.post-card__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
}
.post-card__wrapper {
  margin-top: auto;
}
.post-card__title,
.post-card__text {
  margin: 0;
  padding: 6px 12px;
}
.post-card__text {
  display: flex;
  justify-content: space-between;
}
.post-card__img-wrapper {
  width: 100%;
  height: 180px;
}
.post-card__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>