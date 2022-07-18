import Multiselect from "vue-multiselect";
import Vue from "vue";
import { UserProjectReferenceDTO } from "@/services/ProjectReferenceDTO";
import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import {
  IUserCertificationDTO,
  UserCertificationDTO,
} from "@/services/CertificationDTO";

export default Vue.extend({
  props: {
    expertProfileId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      awardsAndCertifications: [] as UserCertificationDTO[],
      expertAwardsAndCertifications: [] as UserCertificationDTO[],
      expertAwardsAndCertificationsIds: [] as number[],
    };
  },
  components: { Multiselect },
  created() {
    if (this.expertProfileId !== 0) {
      this.fetchUserCertifications();
      this.fetchExpertCertifications();
    }
  },
  methods: {
    fetchUserCertifications(): void {
      $http
        .get("/profile/certification")
        .then(({ data }) => {
          console.log(data.certifications as UserCertificationDTO[]);
          this.awardsAndCertifications = data.certifications.map(
            (cert: IUserCertificationDTO) => new UserCertificationDTO(cert)
          );
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
    fetchExpertCertifications(): void {
      $http
        .get("/expert-profile/" + this.expertProfileId + "/certification")
        .then(({ data }) => {
          console.log(data.certifications as UserProjectReferenceDTO[]);
          this.expertAwardsAndCertifications = data.certifications.map(
            (cert: IUserCertificationDTO) => new UserCertificationDTO(cert)
          );
          this.expertAwardsAndCertificationsIds = data.certifications.map(
            (cert: IUserCertificationDTO) => cert.id
          );
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
    updateExpertCertifications(): void {
      $http
        .post(
          "/expert-profile/update/certification",
          jsonToFormData({
            certifications: this.expertAwardsAndCertificationsIds,
            expert_profile_id: this.expertProfileId,
          })
        )
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({
            name: "expert-profile-personal-information",
            params: { expertProfileId: this.expertProfileId.toString() },
          });
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
