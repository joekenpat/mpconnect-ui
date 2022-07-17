<template>
  <div class="PC-grid1">
    <div class="PC-form-container">
      <div class="PC-form-list" id="step1-form-list">
        <router-link
          v-for="(menuLink, i) in menuLinks"
          :to="
            currentRoutePath !== menuLink.route && expertProfileId === 0
              ? '#'
              : menuLink.route
          "
          :key="i"
          :class="[currentRoutePath === menuLink.route && 'active']"
        >
          {{ menuLink.text }}</router-link
        >
      </div>
    </div>
  </div>
  <!-- PC-grid1 closing tag-->
</template>
<script lang="ts">
import Vue from "vue";

interface IExpertMenuLink {
  route: string;
  text: string;
  status: "completed" | "warning" | "not-started";
}
export default Vue.extend({
  props: {
    expertProfileId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentRoutePath: "personal-information",
    };
  },
  computed: {
    menuLinks(): IExpertMenuLink[] {
      const expertProfileId = this.expertProfileId;
      return [
        {
          route: "/expert-profile/" + expertProfileId + "/personal-information",
          text: "Personal Information",
          status: "not-started",
        },
        {
          route:
            "/expert-profile/" +
            expertProfileId +
            "/industry-and-functional-expertise",
          text: "Industry and Functional Expertise",
          status: "not-started",
        },
        {
          route: "/expert-profile/" + expertProfileId + "/project-reference",
          text: "Project References",
          status: "not-started",
        },
        {
          route:
            "/expert-profile/" + expertProfileId + "/awards-and-certification",
          text: "Awards and Certification",
          status: "not-started",
        },
      ];
    },
  },
  watch: {
    $route(to, _) {
      this.currentRoutePath = to.path;
    },
  },
  methods: {
    menuLinkClass(status: "completed" | "warning" | "not-started"): string {
      if (status === "completed") {
        return "fa fa-check-circle red-font";
      } else if (status === "warning") {
        return "fa fa-warning yellow-font";
      } else {
        return "fa fa-check-circle";
      }
    },
  },
});
</script>
<style scoped></style>
