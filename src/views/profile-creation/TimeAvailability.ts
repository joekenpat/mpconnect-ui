import { countries } from "@/services/Countries";
import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import { UserWorkStatusDTO } from "@/services/UserDTO";
import Vue from "vue";
import Multiselect from "vue-multiselect";

export default Vue.extend({
  data() {
    return {
      topicOfInterestOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
        "Scala",
        "Vue.js",
      ],
      workStatus: {} as UserWorkStatusDTO,
      countryOptions: countries,
      formErrors: {} as { [key: string]: string[] },
    };
  },
  components: { Multiselect },
  created() {
    this.fetchUserWorkStatus();
  },
  methods: {
    setCurrentJobStatus(status: string) {
      this.workStatus.current_job_status = status;
    },
    fetchUserWorkStatus(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          console.log(new UserWorkStatusDTO(data.user));
          this.workStatus = new UserWorkStatusDTO(data.user);
        })
        .catch((error) => {
          console.error({ error });
          this.$toast.open({
            type: "error",
            message: error.response.data.message,
            duration: 5000,
          });
        });
    },
    updateUserWorkStatus(): void {
      $http
        .post("/profile/update/work-status", jsonToFormData(this.workStatus))
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({
            name: "profile-creation-awards-and-certification",
          });
        })
        .catch((error) => {
          console.error({ error });
          if (error.request.status === 422) {
            this.formErrors = error.response.data.errors
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
