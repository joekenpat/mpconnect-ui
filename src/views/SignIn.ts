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
      return !isEmpty(this.auth.email) && !isEmpty(this.auth.password);
    },
  },
  methods: {
    ...mapActions(["setAuthUser"]),
    signIn(): void {
      $http
        .post("/auth/sign-in", jsonToFormData(this.auth))
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: "Login successful",
            duration: 3000,
          });
          this.setAuthUser({
            email: data.user.email,
            auth_token: data.token,
          });
          if (data.first_sign_in === true || data.first_sign_in === "true") {
            this.$router.push("/profile-creation-summary");
          } else {
            this.$router.push("/profile-creation/personal-information");
          }
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
