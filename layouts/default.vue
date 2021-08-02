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

<style>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.layout__main {
  background-color: #f1f1f2;
  padding: 20px;
  flex-grow: 1;
}
</style>
