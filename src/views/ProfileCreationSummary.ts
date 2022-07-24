import avatar from "@/assets/avatar.png";
import { $http } from "@/services/http-common";
import {
  UserInterestDTO,
  UserPersonalInfoDTO,
  UserShortBioDTO,
  UserWorkStatusDTO
} from "@/services/UserDTO";

import { numberToMonthName } from "@/services/CalendarMonthUtil";
import {
  IUserCertificationDTO,
  UserCertificationDTO
} from "@/services/CertificationDTO";
import { ExpertProfileDTO } from "@/services/ExpertProfileDTO";
import {
  IUserIndustryOrSkillDTO,
  UserIndustryOrSkillDTO
} from "@/services/IndustryExperienceDTO";
import {
  IUserProjectReferenceDTO,
  UserProjectReferenceDTO
} from "@/services/ProjectReferenceDTO";
import {
  IUserWorkExperienceDTO,
  UserWorkExperienceDTO
} from "@/services/WorkExperienceDTO";
import Vue from "vue";
import { mapActions } from "vuex";

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
      expertProfiles: [] as ExpertProfileDTO[],
      workStatus: {} as UserWorkStatusDTO,
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
          this.workStatus = new UserWorkStatusDTO(data.user);
          console.log(typeof this.workStatus.preferred_job_countries)
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

    fetchUserIndustryOrSkills(): void {
      $http
        .get("/profile/skill")
        .then(({ data }) => {
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
        }).finally(() => {
          this.$store.dispatch("setLoading", false);
        });
    },
    fetchUserWorkExperiences(): void {
      $http
        .get("/profile/work-experience")
        .then(({ data }) => {
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
        }).finally(() => {
          this.$store.dispatch("setLoading", false);
        });
    },
    filenameFromPath(path: string): string {
      return path.split('/').pop()?.split('#')?.shift()?.split('?').shift() || "#";
    },
    fetchUserProjectReferences(): void {
      $http
        .get("/profile/project-reference")
        .then(({ data }) => {
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
        }).finally(() => {
          this.$store.dispatch("setLoading", false);
        });
    },
    fetchUserCertifications(): void {
      $http
        .get("/profile/certification")
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
        }).finally(() => {
          this.$store.dispatch("setLoading", false);
        });
    },
  },
});
