import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import { UserInterestDTO } from "@/services/UserDTO";
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
      interest: {
        topic_of_interests: [],
        areas_of_contribution: [],
      } as UserInterestDTO,
    };
  },
  components: { Multiselect },
  created() {
    this.fetchUserInterest();
  },
  methods: {
    removeTopicValue(index: number): void {
      this.interest.topic_of_interests.splice(index, 1);
    },
    fetchUserInterest(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          console.log(new UserInterestDTO(data.user));
          this.interest = new UserInterestDTO(data.user);
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
    updateUserInterest(): void {
      $http
        .post("/profile/update/interest", jsonToFormData(this.interest))
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({ name: "profile-creation-summary" });
        })
        .catch((error) => {
          console.error({ error });
          if (error.request.status === 422) {
            console.error({ errors: error.response.data.errors });
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
