<script lang="ts">
import ExpertProfileSideBar from "@/components/ExpertProfileSideBar.vue";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      count: 1,
    };
  },
  props: {
    expertProfileId: {
      type: Number,
    },
  },
  components: {
    ExpertProfileSideBar,
  },
});
</script>

<template>
  <div class="PC-container">
    <h2 class="white-font">Create your new profile</h2>
    <p class="white-font">
      Create your expert profile to get more chance to hire for this job.
    </p>
    <main class="PC-main">
      <ExpertProfileSideBar :expertProfileId="expertProfileId" />
      <router-view :expertProfileId="expertProfileId"></router-view>
      <!--PC-grid2 closing tag-->
    </main>
  </div>
</template>
