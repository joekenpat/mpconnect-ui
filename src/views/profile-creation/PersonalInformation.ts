import Vue from "vue";
import Multiselect from "vue-multiselect";
import avatar from "@/assets/avatar.png";
import { $http } from "@/services/http-common";
import { UserPersonalInfoDTO } from "@/services/UserDTO";
import { jsonToFormData } from "@/services/JsonToFormData";
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
      countryOptions: ["nigeria", "uae"],
      yearsOfWorkExperienceOptions: ["2", "3", "4", "5"],
      countryOfWorkExperienceOptions: ["2", "3", "4", "5"],
      languageOptions: ["English", "Vernacular"],
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
    fetchUserDetail(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          console.log(new UserPersonalInfoDTO(data.user));
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
