<template>
  <main class="layout__main new-post">
    <h1 class="layout__title">New post</h1>
    <form class="new-post__form">
      <label>
        Title
        <input
          class="new-post__input"
          type="text"
          accept=".jpg, .jpeg, .png"
          placeholder="enter the post title"
        />
      </label>
      <label>
        Post text
        <textarea class="new-post__input" />
      </label>
      <label>
        Post image
        <input class="new-post__input" type="file" />
      </label>
    </form>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.new-post__form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
}
.new-post__input {
  display: block;
}
</style>
