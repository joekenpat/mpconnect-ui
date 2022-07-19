<script lang="ts">
import TopNavBar from "@/components/TopNavBar.vue";
import Vue from "vue";
import Loading from "vue-loading-overlay";
import { mapState } from "vuex";
import "vue-loading-overlay/dist/vue-loading.css";
export default Vue.extend({
  components: {
    TopNavBar,
    Loading,
  },
  computed: {
    ...mapState(["loading"]),
  },
});
</script>

<template>
  <div id="app">
    <Loading
      :active.sync="loading"
      :color="'#e43232'"
      background-color="#d6d6d6"
      :enforce-focus="true"
      :width="50"
      :height="50"
    />
    <TopNavBar />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style src="@/assets/app.scss" lang="scss"></style>
