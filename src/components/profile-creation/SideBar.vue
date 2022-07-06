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
          v-for="(menulink, i) in menuLinks"
          :to="menulink.route"
          :key="i"
          :class="[currentRoutePath === menulink.route && 'active']"
          ><span class="fa fa-check-circle"></span>
          {{ menulink.text }}</router-link
        >
      </div>
    </div>
  </div>
  <!-- PC-grid1 closing tag-->
</template>
<script lang="ts">
interface IMenuLink {
  route: string,
  text: string,
  progress: number
}
export default {
  data() {
    return {
      menuLinks: [
        {
          route: "/profile-creation/personal-information",
          text: "Personal Information",
          progress: 0,
        },
        {
          route: "/profile-creation/short-bio",
          text: "Short Bio (CV Summary)",
          progress: 10,
        },
        {
          route: "/profile-creation/work-history",
          text: "Work History",
          progress: 20,
        },
        {
          route: "/profile-creation/project-reference",
          text: "Project References",
          progress: 30,
        },
        {
          route: "/profile-creation/industry-experience",
          text: "Industry Experience",
          progress: 40,
        },
        {
          route: "/profile-creation/functional-skills",
          text: "Functional Skills",
          progress: 50,
        },
        {
          route: "/profile-creation/time-availability",
          text: "Time Availability",
          progress: 60,
        },
        {
          route: "/profile-creation/awards-and-certification",
          text: "Awards and Certification",
          progress: 80,
        },
        {
          route: "/profile-creation/interest-and-contribution",
          text: "Interest and Contributions",
          progress: 90,
        },
      ] as IMenuLink[],
      currentRoutePath: "personal-information",
    };
  },
  computed: {
    currentMenuProgress(): number {
      return (
        this.menuLinks.find(({ route }) => {return route === this.currentRoutePath})
          ?.progress || 0
      );
    },
  },
  watch: {
    $route(to, _) {
      this.currentRoutePath = to.path;
    },
  },
};
</script>
<style scoped></style>
