import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import { UserInterestDTO } from "@/services/UserDTO";
import avatar from "@/assets/avatar.png";

import Vue from "vue";
import { mapActions } from "vuex";
import { isEmpty } from "lodash";

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
          }),
            this.$router.push("/profile-creation/personal-information");
        }).catch((error) => {
          console.error({ error });
          if (error.request.status === 422) {
            this.formErrors = error.response.data.errors;
          }
          this.$toast.open({
            type: "error",
            message: error.response.data.message,
            duration: 5000,
          });
        });
    },
  },
});
