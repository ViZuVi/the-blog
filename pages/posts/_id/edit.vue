<template>
  <main class="layout__main new-post">
    <PostFormCreate formTitle="Edit post" />
  </main>
</template>

<script>
import PostFormCreate from "~/components/posts/PostFormCreate.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { PostFormCreate },
  middleware: "auth",
};
</script>