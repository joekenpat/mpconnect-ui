import { $http } from "@/services/http-common";
import { jsonToFormData } from "@/services/JsonToFormData";
import {
  UserInterestDTO,
  UserPersonalInfoDTO,
  UserShortBioDTO,
} from "@/services/UserDTO";
import avatar from "@/assets/avatar.png";

import Vue from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { isEmpty } from "lodash";
import {
  IUserWorkExperienceDTO,
  UserWorkExperienceDTO,
} from "@/services/WorkExperienceDTO";
import {
  IUserProjectReferenceDTO,
  UserProjectReferenceDTO,
} from "@/services/ProjectReferenceDTO";
import {
  ExpertIndustryOrSkillDTO,
  IExpertIndustryOrSkillDTO,
  IUserIndustryOrSkillDTO,
  UserIndustryOrSkillDTO,
} from "@/services/IndustryExperienceDTO";
import {
  IUserCertificationDTO,
  UserCertificationDTO,
} from "@/services/CertificationDTO";
import { numberToMonthName } from "@/services/CalendarMonthUtil";
import {
  ExpertProfileDTO,
  IExpertProfileDTO,
} from "@/services/ExpertProfileDTO";

export default Vue.extend({
  props: {
    expertProfileId: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      avatar,
      fullName: "",
      personalInformation: {
        languages: [
          {
            name: "",
            fluency: "",
          },
        ],
      } as UserPersonalInfoDTO,
      userBio: {
        short_bio: "",
      } as UserShortBioDTO,
      interest: {
        topic_of_interests: [],
        areas_of_contribution: [],
      } as UserInterestDTO,
      workExperiences: [] as UserWorkExperienceDTO[],
      expertProjectReference: [] as UserProjectReferenceDTO[],
      industry_experiences: [] as UserIndustryOrSkillDTO[],
      functional_skills: [] as UserIndustryOrSkillDTO[],
      awardsAndCertifications: [] as UserCertificationDTO[],
      expertProfiles: [] as ExpertProfileDTO[],
    };
  },
  created() {
    this.fetchUserDetail();
    this.fetchExpertProfiles();
    if (this.expertProfileId) {
      this.fetchExpertProjectReferences();
      this.fetchExpertIndustryOrSkills();
      this.fetchExpertCertifications();
    }
  },
  computed: {
    currentExpertProfile(): ExpertProfileDTO | undefined {
      return this.expertProfiles.find((expertProfile) => {
        return expertProfile.id === this.expertProfileId;
      });
    },
  },
  methods: {
    ...mapActions(["setAuthUser"]),
    numberToMonth(number: number) {
      return numberToMonthName(number);
    },
    fetchUserDetail(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          this.personalInformation = new UserPersonalInfoDTO(data.user);
          this.userBio = new UserShortBioDTO(data.user);
          this.interest = new UserInterestDTO(data.user);

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
    fetchExpertProfiles(): void {
      $http
        .get("/expert-profile")
        .then(({ data }) => {
          this.expertProfiles = data.profiles.map(
            (profile: IExpertProfileDTO) => new ExpertProfileDTO(profile)
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
    fetchExpertIndustryOrSkills(): void {
      $http
        .get("/expert-profile/" + this.expertProfileId + "/skill")
        .then(({ data }) => {
          this.functional_skills = data.skills
            .map(
              (skill: IExpertIndustryOrSkillDTO) =>
                new ExpertIndustryOrSkillDTO(skill)
            )
            .filter(
              (skill: IExpertIndustryOrSkillDTO) =>
                skill.type === "functional_skill"
            );
          this.industry_experiences = data.skills
            .map(
              (exp: IExpertIndustryOrSkillDTO) =>
                new ExpertIndustryOrSkillDTO(exp)
            )
            .filter(
              (skill: IExpertIndustryOrSkillDTO) =>
                skill.type === "industry_experience"
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
          this.expertProjectReference = data.project_references.map(
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
    fetchExpertCertifications(): void {
      $http
        .get("/expert-profile/" + this.expertProfileId + "/certification")
        .then(({ data }) => {
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
  },
});
