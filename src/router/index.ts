import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

const guest_only_routes = ["/auth", "/auth/sign-up", "/auth/sign-in"];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/auth/sign-in",
      meta: {
        auth_required: false,
      },
    },
    // {
    //   path: "/auth/sign-up",
    //   name: "sign-up",
    //   component: () => import("@/views/SignUp.vue"),
    //   meta: {
    //     auth_required: false,
    //   },
    // },
    {
      path: "/auth/sign-in",
      name: "sign-in",
      component: () => import("@/views/SignIn.vue"),
      meta: {
        auth_required: false,
      },
    },
    {
      path: "/auth/sign-out",
      name: "sign-out",
      meta: {
        auth_required: true,
      },
    },
    {
      path: "/profile-creation",
      name: "profile-creation",
      component: () => import("@/views/profile-creation/index.vue"),
      redirect: "/profile-creation/personal-information",
      meta: {
        auth_required: true,
      },
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
    {
      path: "/profile-creation-summary",
      name: "profile-creation-summary",
      component: () => import("@/views/ProfileCreationSummary.vue"),
      meta: {
        auth_required: true,
      },
    },
    {
      path: "/expert-profile/:expertProfileId",
      name: "expert-profile",
      props: ({ params }) => ({
        expertProfileId: parseInt(params.expertProfileId) || 0,
      }),
      component: () => import("@/views/expert-profile/index.vue"),
      redirect: (to) => {
        console.log({ to });
        return `/expert-profile/${
          to.params.expertProfileId || "0"
        }/personal-information`;
      },
      meta: {
        auth_required: true,
      },
      children: [
        {
          path: "personal-information",
          name: "expert-profile-personal-information",
          props: ({ params }) => ({
            expertProfileId: parseInt(params.expertProfileId) || 0,
          }),
          component: () =>
            import("@/views/expert-profile/PersonalInformation.vue"),
        },
        {
          path: "industry-and-functional-expertise",
          name: "expert-profile-industry-and-functional-expertise",
          props: ({ params }) => ({
            expertProfileId: parseInt(params.expertProfileId) || 0,
          }),
          component: () =>
            import("@/views/expert-profile/IndustryAndFunctionalExpertise.vue"),
        },
        // {
        //   path: "project-reference",
        //   name: "expert-profile-project-reference",
        //   props: true,
        //   component: () =>
        //     import("@/views/expert-profile/ProjectReference.vue"),
        // },
        // {
        //   path: "awards-and-certification",
        //   name: "expert-profile-awards-and-certification",
        //   props: true,
        //   component: () =>
        //     import("@/views/expert-profile/AwardsAndCertification.vue"),
        // },
        {
          path: "*",
          redirect: (to) =>
            `/expert-profile/${
              to.params.expertProfileId || "0"
            }/personal-information`,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const current_user = store.getters.auth_user;
  const auth_is_required = to.matched.some((x) => x.meta.auth_required);

  if (auth_is_required && !current_user) {
    next({
      path: "/auth/sign-in",
      query: {
        redirect: to.path,
      },
    });
  } else if (current_user && guest_only_routes.includes(to.path)) {
    next("/profile-creation");
  } else if (auth_is_required && current_user) {
    if (to.path === "/auth/sign-out") {
      store.dispatch("setAuthUser", undefined);
      next("/");
    }
    next();
  } else {
    next();
  }
});

export default router;
