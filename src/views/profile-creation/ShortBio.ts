import Vue from "vue";
import Multiselect from "vue-multiselect";
import { $http } from "@/services/http-common";
import { UserShortBioDTO } from "@/services/UserDTO";
import { jsonToFormData } from "@/services/JsonToFormData";
export default Vue.extend({
  data() {
    return {
      userBio: {
        short_bio: "",
      } as UserShortBioDTO,
      formErrors: {
        short_bio: [] as string[],
      },
    };
  },
  components: { Multiselect },
  created() {
    this.fetchUserDetail();
  },
  methods: {
    fetchUserDetail(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          console.log(new UserShortBioDTO(data.user));
          this.userBio = new UserShortBioDTO(data.user);
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
    updateShortBio(): void {
      $http
        .post("/profile/update/short-bio", jsonToFormData(this.userBio))
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({ name: "profile-creation-work-history" });
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
