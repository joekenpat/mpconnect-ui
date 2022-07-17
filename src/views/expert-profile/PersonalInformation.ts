import Vue from "vue";
import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import { ExpertProfileDTO } from "@/services/ExpertProfileDTO";

export default Vue.extend({
  props: {
    expertProfileId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      personalInformation: {} as ExpertProfileDTO,
      formErrors: {} as { [key: string]: string[] },
    };
  },
  components: {},
  created() {
    if (this.expertProfileId !== 0) {
      this.fetchExpertPersonalInformation();
    }
  },
  methods: {
    fetchExpertPersonalInformation(): void {
      $http
        .get(
          "/expert-profile/" + this.expertProfileId
        )
        .then(({ data }) => {
          console.log(new ExpertProfileDTO(data.profile));
          this.personalInformation = new ExpertProfileDTO(data.profile);
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
    updateExpertPersonalInformation(): void {
      const { personalInformation } = this;
      if (this.expertProfileId !== 0) {
        personalInformation.id = this.expertProfileId;
      }
      $http
        .post(
          "/expert-profile/update/personal-information",
          jsonToFormData(this.personalInformation)
        )
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({
            name: "expert-profile-industry-and-functional-expertise",
            params: { expertProfileId: data.profile.id },
          });
        })
        .catch((error) => {
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
