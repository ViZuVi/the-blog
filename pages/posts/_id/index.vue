<template>
  <main class="layout__main post-details">
    <article class="post-details__wrapper">
      <h1 class="layout__title">{{ selectedPost.title }}</h1>
      <img
        class="post-details__img"
        :src="selectedPost.img"
        :alt="selectedPost.title"
      />
      <p class="post-details__text">{{ selectedPost.text }}</p>
      <!-- <button @click="$router.push(`posts/${$route.params.id}/edit`)">edit</button> -->
      <div class="post-details__info">
        <p class="post-details__author">
          Author: {{ selectedPost.author.name }}
        </p>

        <div class="post-details__edit-wrapper">
          <p class="post-details__date">Created: {{ dateFormatted }}</p>
          <button
            class="post-details__btn post-details__btn--add"
            v-if="isAuth"
            @click="toggleFavourites(selectedPost)"
          >
            {{ isFavourite ? "&#10004;" : "&#10010;" }}
          </button>
          <button
            class="post-details__btn post-details__btn--edit"
            v-if="isAuthor"
            @click="handlePostEdit"
          >
            Edit
          </button>
          <button
            class="post-details__btn post-details__btn--delete"
            v-if="isAuthor"
            @click="handlePostDelete"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["loadedPosts"]),
    ...mapGetters("user", ["isAuth"]),
    ...mapState("user", ["user"]),
    ...mapState(["favouritePosts"]),
    selectedPost() {
      return this.loadedPosts.find((post) => post.id === this.$route.params.id);
    },
    isAuthor() {
      return this.selectedPost.author.id === this.user.id;
    },
    dateFormatted() {
      let formatter = new Intl.DateTimeFormat("en");
      return formatter.format(new Date(this.selectedPost.date));
    },
    isFavourite() {
      // TODO: new store for selected post and is it favourite
      return !!this.favouritePosts.find(
        (post) => post.id === this.selectedPost.id
      );
    },
  },
  methods: {
    ...mapActions([
      "deletePost",
      "editPost",
      "addToFavourites",
      "removeFromFavourites",
    ]),
    handlePostDelete() {
      this.deletePost(this.$route.params.id).then(() => this.$router.push(`/`));
    },
    handlePostEdit() {
      this.$router.push(`/posts/${this.$route.params.id}/edit`);
    },
    toggleFavourites(post) {
      this.isFavourite
        ? this.removeFromFavourites(post)
        : this.addToFavourites(post);
    },
  },
  head: {
    title: "A blog post",
  },
};
</script>

<style lang="scss" scoped>
.post-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.post-details__wrapper {
  width: 80%;
}

.post-details__text {
  margin: 0 0 40px 0;
  font-size: 24px;
}

.post-details__img {
  display: block;
  margin: 0 auto 40px;
}

.post-details__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $grey;
}

.post-details__author {
  font-style: italic;
  margin: 0 12px 0 0;
}

.post-details__edit-wrapper {
  display: flex;
  justify-content: space-between;
}

.post-details__date,
.post-details__btn--add,
.post-details__btn--edit {
  margin-right: 12px;
}

.post-details__btn {
  text-align: center;
  min-width: 100px;
  font-weight: bold;
  background-color: transparent;
  color: $blue;
  border: 2px solid $blue;
  padding: 6px 12px;
  cursor: pointer;
  line-height: 30px;

  &:hover {
    color: #ffffff;
    background-color: $marine;
    border-color: $marine;
  }
}

.post-details__btn--add {
  font-size: 18px;
}
</style>