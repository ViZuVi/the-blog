<template>
  <div class="layout">
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader";
export default {
  name: "login",
  components: {TheHeader}
}
</script>