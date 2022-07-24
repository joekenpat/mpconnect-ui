import avatar from "@/assets/avatar.png";
import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";

import { isEmpty } from "lodash";
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      avatar,
      re_password: "",
      auth: {
        email: "",
        password: "",
      },
      formErrors: {} as { [key: string]: string[] },
    };
  },
  computed: {
    canSubmit(): boolean {
      return (
        !isEmpty(this.auth.email) &&
        !isEmpty(this.auth.password) &&
        isEmpty(this.re_password) &&
        this.re_password === this.auth.password
      );
    },
  },
  methods: {
    ...mapActions(["setAuthUser"]),
    signUp(): void {
      $http
        .post("/auth/sign-up", jsonToFormData(this.auth))
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: "Sign up successful",
            duration: 3000,
          });
          this.setAuthUser({
            email: data.user.email,
            auth_token: data.token,
          }),
            this.$router.push("/profile-creation/personal-information");
        })
        .catch((error) => {
          console.error({ error });
          if (error.response.status === 422) {
            this.formErrors = error.response.data.errors;
          }
          this.$toast.open({
            type: "error",
            message: error.response.data.message,
            duration: 5000,
          });
        }).finally(() => {
          this.$store.dispatch("setLoading", false);
        });
    },
  },
});
