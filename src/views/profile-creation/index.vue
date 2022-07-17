<script lang="ts">
import ProfileCreationSideBar from "@/components/ProfileCreationSideBar.vue";

export default {
  data() {
    return {
      count: 1,
    };
  },
  components: {
    ProfileCreationSideBar,
  },
};
</script>

<template>
  <div class="PC-container">
    <h2 class="white-font">Thank you for your interest in MP Connect!</h2>
    <p class="white-font">
      To begin your application to join, tell us about yourself and complete a
      profile for review.
    </p>
    <main class="PC-main">
      <ProfileCreationSideBar />
      <router-view></router-view>
      <!--PC-grid2 closing tag-->
    </main>
  </div>
</template>
