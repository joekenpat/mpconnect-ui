import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import {
    EmptyUserProjectReferenceDTO,
    IUserProjectReferenceDTO,
    UserProjectReferenceDTO
} from "@/services/ProjectReferenceDTO";
import { isEqual } from "lodash";
import Vue from "vue";
import Multiselect from "vue-multiselect";

export default Vue.extend({
  data() {
    return {
      functionalSkillsOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
      ],
      projectReferences: [
        EmptyUserProjectReferenceDTO(),
      ] as UserProjectReferenceDTO[],
      formErrors: {} as { [key: string]: string[] },
    };
  },
  components: { Multiselect },
  created() {
    this.fetchUserProjectReferences();
  },
  methods: {
    removeFunctionalSkillValue(referenceIndex: number, index: number): void {
      this.projectReferences[referenceIndex].functional_skills.splice(index, 1);
    },
    filenameFromPath(path: string): string {
      return path.split('/').pop()?.split('#')?.shift()?.split('?').shift() || "#";
    },
    prepareErrorMessage(errMsg: { [key: string]: string[] }): { [key: string]: string[] } {
      return Object.entries(errMsg).reduce((acc, [key, value]) => {
        const newMsg = value.map(msg => (msg.split(key)[1]).trim());
        return { ...acc, [key]: newMsg };
      } , {} as { [key: string]: string[] })
    },
    addNewProjectReference(): void {
      console.log({ EmptyUserProjectReferenceDTO });
      this.projectReferences.push(EmptyUserProjectReferenceDTO());
    },
    getUploadedDocument(referenceIndex: number): void {
      const el = this.$el.querySelector(
        `#document_file_${referenceIndex}`
      ) as HTMLInputElement;
      const selectedFile = el.files?.[0];

      this.projectReferences[referenceIndex].new_document_file = selectedFile;
    },
    handleDocumentSelect(referenceIndex: number): void {
      const el = this.$el.querySelector(
        `#document_file_${referenceIndex}`
      ) as HTMLInputElement;
      if (el) {
        el.click();
      }
    },
    uploadedFileName(referenceIndex: number): string {
      const fileSelected = this.projectReferences[referenceIndex]
        .new_document_file as File;
      return fileSelected ? fileSelected.name : "Upload your files";
    },
    fetchUserProjectReferences(): void {
      $http
        .get("/profile/project-reference")
        .then(({ data }) => {
          this.projectReferences = data.project_references.map(
            (experience: IUserProjectReferenceDTO) =>
              new UserProjectReferenceDTO(experience)
          );
          if (!this.projectReferences.length) {
            this.addNewProjectReference();
          }
        })
        .catch((error) => {
          console.error({ error });
          this.$toast.open({
            type: "error",
            message: error.response.data.message,
            duration: 5000,
          });
        }).finally(() => {
          this.$store.dispatch("setLoading", false);
        });
    },
    updateUserProjectReferences(): void {
      $http
        .post(
          "/profile/update/project-reference",
          jsonToFormData({
            project_references: this.projectReferences.filter(
              (ref) => !isEqual(ref, EmptyUserProjectReferenceDTO())
            ),
          })
        )
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({
            name: "profile-creation-industry-and-functional-expertise",
          });
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 422) {
            this.formErrors = this.prepareErrorMessage(error.response.data.errors);
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
