import avatar from "@/assets/avatar.png";
import { countries } from "@/services/Countries";
import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import { languages } from "@/services/Languages";
import { UserPersonalInfoDTO } from "@/services/UserDTO";
import Vue from "vue";
import Multiselect from "vue-multiselect";
export default Vue.extend({
  data() {
    return {
      avatarPlaceholder: avatar,
      fullName: "",
      handsOnTechnologyOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
      ],
      genderOptions: ["male", "female"],
      countryOptions: countries,
      yearsOfWorkExperienceOptions: ["2", "3", "4", "5"],
      languageOptions: languages,
      utmMediumOptions: [
        "Reference",
        "LinkedIn",
        "Google",
        "Promotional Email",
        "Invitation",
      ],
      personalInformation: {
        languages: [
          {
            name: "",
            fluency: "",
          },
        ],
      } as UserPersonalInfoDTO,
      formErrors: {} as { [key: string]: string[] },
    };
  },
  watch: {
    fullName: {
      handler(val) {
        const [firstName, ...rest] = val.split(" ");
        this.personalInformation.first_name = firstName;
        this.personalInformation.last_name = rest.join(" ");
      },
    },
  },
  components: { Multiselect },
  created() {
    this.fetchUserDetail();
  },
  methods: {
    removeHandsOnTechnologyValue(index: number): void {
      this.personalInformation.hands_on_technology.splice(index, 1);
    },

    addUserPersonalInformationLanguage(): void {
      this.personalInformation.languages.push({
        name: "",
        fluency: "",
      });
    },
    getUploadedDocument(): void {
      const el = this.$el.querySelector(
        '#new_profile_image'
      ) as HTMLInputElement;
      const selectedFile = el.files?.[0];

      this.personalInformation.new_profile_image = selectedFile;
    },
    handleDocumentSelect(): void {
      const el = this.$el.querySelector(
        '#new_profile_image'
      ) as HTMLInputElement;
      if (el) {
        el.click();
      }
    },
    uploadedFileName(): string {
      const fileSelected = this.personalInformation.new_profile_image as File;
      return fileSelected ? fileSelected.name : "Upload new";
    },
    fetchUserDetail(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          this.personalInformation = new UserPersonalInfoDTO(data.user);
          this.fullName = [
            this.personalInformation.first_name,
            this.personalInformation.last_name,
          ].join(" ");
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
    updateUserPersonalInformation(): void {
      $http
        .post(
          "/profile/update/personal-information",
          jsonToFormData(this.personalInformation)
        )
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({ name: "profile-creation-short-bio" });
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
