<template>
  <header class="layout__header header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <NuxtLink class="header__link" to="/">Home</NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink class="header__link" to="/posts">My posts</NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink class="header__link" to="/login">Login</NuxtLink>
        </li>
      </ul>
    </nav>
    <TheTagsNav />
  </header>
</template>

<script>
import TheTagsNav from "./TheTagsNav"
export default {
  name: "TheHeader",
  components: {
    TheTagsNav
  }
};
</script>

<style>
.layout__header {
  background-color: #1995ad;
  color: #ffffff;
}
.header__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.header__item:last-child {
  margin-left: auto;
}
.header__link {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  padding: 24px 40px;
  height: 100%;
}
.nuxt-link-exact-active,
.header__link:hover {
  background-color: #a1d6e2;
}
</style>
