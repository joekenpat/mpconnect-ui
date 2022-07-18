import Multiselect from "vue-multiselect";
import Vue from "vue";
import {
  IUserProjectReferenceDTO,
  UserProjectReferenceDTO,
} from "@/services/ProjectReferenceDTO";
import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import { isEqual } from "lodash";

export default Vue.extend({
  props: {
    expertProfileId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      projectReferences: [] as UserProjectReferenceDTO[],
      expertProjectReference: [] as IUserProjectReferenceDTO[],
      expertProjectReferenceIds: [] as number[],
    };
  },
  components: { Multiselect },
  created() {
    if (this.expertProfileId !== 0) {
      this.fetchUserProjectReferences();
      this.fetchExpertProjectReferences();
    }
  },
  methods: {
    fetchUserProjectReferences(): void {
      $http
        .get("/profile/project-reference")
        .then(({ data }) => {
          console.log(data.project_references as UserProjectReferenceDTO[]);
          this.projectReferences = data.project_references.map(
            (experience: IUserProjectReferenceDTO) =>
              new UserProjectReferenceDTO(experience)
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
    fetchExpertProjectReferences(): void {
      $http
        .get("/expert-profile/" + this.expertProfileId + "/project-reference")
        .then(({ data }) => {
          console.log(data.project_references as UserProjectReferenceDTO[]);
          this.expertProjectReference = data.project_references.map(
            (experience: IUserProjectReferenceDTO) =>
              new UserProjectReferenceDTO(experience)
          );
          this.expertProjectReferenceIds = data.project_references.map(
            (experience: IUserProjectReferenceDTO) => experience.id
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
    updateExpertProjectReferences(): void {
      $http
        .post(
          "/expert-profile/update/project-reference",
          jsonToFormData({
            project_reference_ids: this.expertProjectReferenceIds,
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
            name: "expert-profile-awards-and-certification",
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
