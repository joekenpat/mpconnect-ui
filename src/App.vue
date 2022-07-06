<script lang="ts">
import TopNavBar from "@/components/TopNavBar.vue";
export default {
  components: {
    TopNavBar,
  },
};
</script>

<template>
  <div id="app">
    <TopNavBar />
    <router-view></router-view>
  </div>
</template>

<style src="@/assets/app.scss" lang="scss"></style>
