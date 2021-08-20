<template>
  <nav class="tags-nav">
    <ul class="tags-nav__list">
      <li class="tags-nav__item" v-for="tag in tags" :key="tag">
        <a class="tags-nav__link">{{ tag }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TheTagsNav",
  computed: {
    ...mapState(["tags"]),
  },
};
</script>

<style lang="scss" scoped>
.tags-nav {
  background-color: $light;
  padding: 20px 40px 12px;
  color: $marine;
  font-size: 12px;
}
.tags-nav__list {
  display: flex;
  flex-wrap: wrap;
}
.tags-nav__item {
  margin-right: 8px;
  margin-bottom: 8px;
}
.tags-nav__link {
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 2px solid $blue;
  padding: 6px 12px;
  cursor: pointer;
}
</style>