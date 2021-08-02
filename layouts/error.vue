<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">Page not found.</h1>
    <h1 v-else>Error ocurred. Please try again later.</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
    layout: "error",
  },
};
</script>