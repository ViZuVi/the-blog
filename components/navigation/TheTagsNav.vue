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

<style>
.tags-nav {
  background-color: #f1f1f2;
  padding: 20px 40px;
  color: #1995ad;
  font-size: 12px;
}
.tags-nav__list {
  display: flex;
}
.tags-nav__item {
  margin-right: 8px;
}
.tags-nav__link {
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 2px solid #a1d6e2;
  padding: 6px 12px;
  cursor: pointer;
}
</style>