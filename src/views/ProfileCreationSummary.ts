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
  IUserIndustryOrSkillDTO,
  UserIndustryOrSkillDTO,
} from "@/services/IndustryExperienceDTO";
import {
  IUserCertificationDTO,
  UserCertificationDTO,
} from "@/services/CertificationDTO";

export default Vue.extend({
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
      projectReferences: [] as UserProjectReferenceDTO[],
      industry_experiences: [] as UserIndustryOrSkillDTO[],
      functional_skills: [] as UserIndustryOrSkillDTO[],
      awardsAndCertifications: [] as UserCertificationDTO[],
    };
  },
  created() {
    this.fetchUserDetail();
    this.fetchUserIndustryOrSkills();
    this.fetchUserProjectReferences();
    this.fetchUserWorkExperiences();
    this.fetchUserCertifications();
  },
  methods: {
    ...mapActions(["setAuthUser"]),
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
    fetchUserIndustryOrSkills(): void {
      $http
        .get("/profile/skill")
        .then(({ data }) => {
          console.log(data.skills as UserIndustryOrSkillDTO[]);
          this.functional_skills = data.skills
            .map(
              (skill: IUserIndustryOrSkillDTO) =>
                new UserIndustryOrSkillDTO(skill)
            )
            .filter(
              (skill: IUserIndustryOrSkillDTO) =>
                skill.type === "functional_skill"
            );
          this.industry_experiences = data.skills
            .map(
              (exp: IUserIndustryOrSkillDTO) => new UserIndustryOrSkillDTO(exp)
            )
            .filter(
              (skill: IUserIndustryOrSkillDTO) =>
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
    fetchUserWorkExperiences(): void {
      $http
        .get("/profile/work-experience")
        .then(({ data }) => {
          console.log(data.work_experiences as UserWorkExperienceDTO[]);
          this.workExperiences = data.work_experiences.map(
            (experience: IUserWorkExperienceDTO) =>
              new UserWorkExperienceDTO(experience)
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
  },
});
