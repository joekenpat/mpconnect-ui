<template>
  <div class="PC-grid1">
    <div class="profile-ratio-container">
      <div class="profile-ratio">
        <p class="bold-font">Your Profile</p>
        <p class="red-font bold-font">Complete {{ currentMenuProgress }}%</p>
      </div>
      <div class="progress profile-completion-progress">
        <div
          class="progress-bar completion-progressbar"
          role="progressbar"
          :aria-valuenow="currentMenuProgress"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: currentMenuProgress + '%' }"
        >
          <span class="sr-only">{{ currentMenuProgress }}% Complete</span>
        </div>
      </div>
      <br />
    </div>
    <div class="PC-form-container">
      <div class="PC-form-list" id="step1-form-list">
        <router-link
          v-for="(menuLink, i) in menuLinks"
          :to="menuLink.route"
          :key="i"
          :class="[currentRoutePath === menuLink.route && 'active']"
          ><span :class="menuLinkClass(menuLink.status)"></span>
          {{ menuLink.text }}</router-link
        >
      </div>
    </div>
  </div>
  <!-- PC-grid1 closing tag-->
</template>
<script lang="ts">
interface IMenuLink {
  route: string;
  text: string;
  progress: number;
  status: "completed" | "warning" | "not-started";
}
export default {
  data() {
    return {
      menuLinks: [
        {
          route: "/profile-creation/personal-information",
          text: "Personal Information",
          progress: 0,
          status: "not-started",
        },
        {
          route: "/profile-creation/short-bio",
          text: "Short Bio (CV Summary)",
          progress: 10,
          status: "not-started",
        },
        {
          route: "/profile-creation/work-history",
          text: "Work History",
          progress: 20,
          status: "not-started",
        },
        {
          route: "/profile-creation/project-reference",
          text: "Project References",
          progress: 30,
          status: "not-started",
        },
        {
          route: "/profile-creation/industry-and-functional-expertise",
          text: "Industry and Functional Expertise",
          progress: 40,
          status: "not-started",
        },
        {
          route: "/profile-creation/time-availability",
          text: "Time Availability",
          progress: 60,
          status: "not-started",
        },
        {
          route: "/profile-creation/awards-and-certification",
          text: "Awards and Certification",
          progress: 80,
          status: "not-started",
        },
        {
          route: "/profile-creation/interest-and-contribution",
          text: "Interest and Contributions",
          progress: 90,
          status: "not-started",
        },
      ] as IMenuLink[],
      currentRoutePath: "personal-information",
    };
  },
  computed: {
    currentMenuProgress(): number {
      return (
        this.menuLinks.find(({ route }) => {
          return route === this.currentRoutePath;
        })?.progress || 0
      );
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
};
</script>
<style scoped></style>
