<template>
  <header class="layout__header header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <NuxtLink class="header__link" to="/">Home</NuxtLink>
        </li>
        <li class="header__item">
          <NuxtLink class="header__link" to="/users">Favourites</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.layout__header {
  padding: 0 20px;
  background-color: #1995ad;
  color: #ffffff;
  margin-bottom: auto;
}
.header__list {
  /* TODO: add mixin */
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
}
.header__link {
  color: inherit;
  text-decoration: none;
}
.header__item {
  padding: 24px 40px;
}
</style>
