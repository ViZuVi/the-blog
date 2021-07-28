<template>
  <div class="layout">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/Navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
}
</style>
