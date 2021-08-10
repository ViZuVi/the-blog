<template>
  <div class="layout">
    <TheHeader>
      <TheTagsNav />
    </TheHeader>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader";
import TheTagsNav from "@/components/navigation/TheTagsNav";
import TheFooter from "@/components/navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheTagsNav,
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
  background-color: #ffffff;
  padding: 0 40px 40px;
  flex-grow: 1;

}
.layout__title {
  margin: 40px 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
</style>
