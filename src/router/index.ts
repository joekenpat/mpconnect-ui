import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/profile-creation",
    },
    {
      path: "/profile-creation",
      name: "profile-creation",
      component: () => import("@/views/profile-creation/index.vue"),
      redirect: "/profile-creation/personal-information",
      children: [
        {
          path: "personal-information",
          name: "profile-creation-personal-information",
          component: () =>
            import("@/views/profile-creation/PersonalInformation.vue"),
        },
        {
          path: "short-bio",
          name: "profile-creation-short-bio",
          component: () => import("@/views/profile-creation/ShortBio.vue"),
        },
        {
          path: "work-history",
          name: "profile-creation-work-history",
          component: () => import("@/views/profile-creation/WorkHistory.vue"),
        },
        {
          path: "project-reference",
          name: "profile-creation-project-reference",
          component: () =>
            import("@/views/profile-creation/ProjectReference.vue"),
        },
        {
          path: "industry-and-functional-expertise",
          name: "profile-creation-industry-and-functional-expertise",
          component: () =>
            import(
              "@/views/profile-creation/IndustryAndFunctionalExpertise.vue"
            ),
        },
        {
          path: "time-availability",
          name: "profile-creation-time-availability",
          component: () =>
            import("@/views/profile-creation/TimeAvailability.vue"),
        },
        {
          path: "awards-and-certification",
          name: "profile-creation-awards-and-certification",
          component: () =>
            import("@/views/profile-creation/AwardsAndCertification.vue"),
        },
        {
          path: "interest-and-contribution",
          name: "profile-creation-interest-and-contribution",
          component: () =>
            import("@/views/profile-creation/InterestAndContribution.vue"),
        },
      ],
    },
  ],
});

export default router;
