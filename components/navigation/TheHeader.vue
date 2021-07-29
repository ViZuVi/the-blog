<template>
  <header class="layout__header header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <a class="header__link" href="">Home</a>
        </li>
        <li class="header__item">
          <a class="header__link" href="">Favourites</a>
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
  padding: 20px;
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
}
.header__link {
  color: inherit;
  text-decoration: none;
}
</style>
