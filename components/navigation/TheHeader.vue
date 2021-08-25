<template>
  <header class="layout__header header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <NuxtLink class="header__link" to="/">Home</NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink class="header__link" to="/about">About</NuxtLink>
        </li>
        <li v-if="isAuth" class="header__item">
          <NuxtLink class="header__link" to="/posts/own">My posts</NuxtLink>
        </li>
        <li v-if="isAuth" class="header__item">
          <NuxtLink class="header__link" to="/posts/favourites">Favourites</NuxtLink>
        </li>

        <li v-if="!isAuth" class="header__item">
          <NuxtLink class="header__link" to="/login">Login</NuxtLink>
        </li>

        <li v-else class="header__item header__user">
          <ul class="header__user-menu">
            <li class="header__user-item">Settings</li>
            <li class="header__user-item">Logout</li>
          </ul>
        </li>

      </ul>
    </nav>

    <slot />
  </header>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "TheHeader",
  computed: {
    ...mapGetters("user", ["isAuth", "user"]),
  },
};
</script>

<style lang="scss" scoped>
.layout__header {
  background-color: $marine;
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
  background-color: $blue;
}
</style>
