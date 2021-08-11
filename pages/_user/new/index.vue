<template>
  <main class="layout__main new-post">
    <h1 class="layout__title">New post</h1>
    <form class="form">
      <div class="form__control-wrapper">
        <label class="form__label" for="post-title">Title</label>
        <input
          id="post-title"
          class="form__input"
          type="text"
          placeholder="enter the post title"
          maxlength="50"
        />
      </div>
      <div class="form__control-wrapper">
        <label class="form__label" for="post-text">Post text</label>
        <textarea
          id="post-text"
          class="form__input form__input--textarea"
          rows="10"
          minlength="300"
        />
      </div>
      <div class="form__control-wrapper">
        <label class="form__label" for="post-img">Post image</label>
        <input
          id="post-img"
          class="form__input"
          type="file"
          accept=".jpg, .jpeg, .png"
        />
      </div>
    </form>
  </main>
</template>

<script>
export default {};
</script>
