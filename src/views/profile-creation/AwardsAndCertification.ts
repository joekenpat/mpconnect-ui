import { EmptyUserCertificationDTO, IUserCertificationDTO, UserCertificationDTO } from "@/services/CertificationDTO";
import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import { isEqual } from "lodash";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      awardsAndCertifications: [EmptyUserCertificationDTO()] as UserCertificationDTO[],
    };
  },
  created() {
      this.fetchUserCertifications()
  },
  methods: {
    addNewAwardAndCertification(): void {
      this.awardsAndCertifications.push(EmptyUserCertificationDTO());
    },
    getUploadedDocument(referenceIndex: number): void {
      const el = this.$el.querySelector(
        `#proof_file${referenceIndex}`
      ) as HTMLInputElement;
      const selectedFile = el.files?.[0];

      this.awardsAndCertifications[referenceIndex].proof_file = selectedFile;
    },
    handleDocumentSelect(referenceIndex: number): void {
      const el = this.$el.querySelector(
        `#documentFile_${referenceIndex}`
      ) as HTMLInputElement;
      if (el) {
        el.click();
      }
    },
    uploadedFileName(referenceIndex: number): string {
      const fileSelected =
        this.awardsAndCertifications[referenceIndex].proof_file as File;
      return fileSelected ? fileSelected.name : "Upload your files";
    },
    fetchUserCertifications(): void {
      $http
        .get("/profile/certification")
        .then(({ data }) => {
          console.log(data.certifications as UserCertificationDTO[]);
          this.awardsAndCertifications = data.certifications.map(
            (cert: IUserCertificationDTO) =>
              new UserCertificationDTO(cert)
          );
          if (!this.awardsAndCertifications.length) {
            this.addNewAwardAndCertification();
          }
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
    updateUserCertifications(): void {
      $http
        .post(
          "/profile/update/certification",
          jsonToFormData({
            certifications: this.awardsAndCertifications.filter(
              (cert) => !isEqual(cert, EmptyUserCertificationDTO())
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
            name: "profile-creation-interest-and-contribution",
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
