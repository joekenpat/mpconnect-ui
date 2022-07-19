import { $http } from "@/services/http-common";
import {
  IUserIndustryOrSkillDTO,
  UserIndustryOrSkillDTO,
} from "@/services/IndustryExperienceDTO";
import { jsonToFormData } from "@/services/JsonToFormData";
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
        "JavaScript",
        "Python",
        "UX/UI",
        "Product Development",
        "Dev Ops",
        "Quality Assurance",
        "Story telling",
        "Team leader",
      ].map(
        (name) =>
          new UserIndustryOrSkillDTO({
            id: null,
            name,
            type: "functional_skill",
          })
      ),
      handsOnTechnologyOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
        "Scala",
        "Vue.js",
      ].map(
        (name) =>
          new UserIndustryOrSkillDTO({
            id: null,
            name,
            type: "industry_experience",
          })
      ),
      userIndustryAndSkill: {
        industry_experiences: [] as UserIndustryOrSkillDTO[],
        functional_skills: [] as UserIndustryOrSkillDTO[],
      },
      formErrors: {} as { [key: string]: string[] },
    };
  },
  created() {
    this.fetchUserIndustryOrSkills();
  },
  components: {
    Multiselect,
  },
  methods: {
    removeIndustryExperienceValue(index: number): void {
      this.userIndustryAndSkill.industry_experiences.splice(index, 1);
    },
    removeFunctionalSkillValue(index: number): void {
      this.userIndustryAndSkill.functional_skills.splice(index, 1);
    },
    fetchUserIndustryOrSkills(): void {
      $http
        .get("/profile/skill")
        .then(({ data }) => {
          console.log(data.skills as UserIndustryOrSkillDTO[]);
          this.userIndustryAndSkill.functional_skills = data.skills
            .map(
              (skill: IUserIndustryOrSkillDTO) =>
                new UserIndustryOrSkillDTO(skill)
            )
            .filter(
              (skill: IUserIndustryOrSkillDTO) =>
                skill.type === "functional_skill"
            );
          this.userIndustryAndSkill.industry_experiences =
            data.skills
              .map(
                (exp: IUserIndustryOrSkillDTO) =>
                  new UserIndustryOrSkillDTO(exp)
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
    updateUserIndustryOrSkills(): void {
      const { functional_skills, industry_experiences } =
        this.userIndustryAndSkill;
      $http
        .post(
          "/profile/update/skill",
          jsonToFormData({
            skills: [...functional_skills, ...industry_experiences],
          })
        )
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({
            name: "profile-creation-time-availability",
          });
        })
        .catch((error) => {
          console.error({ error });
          if (error.request.status === 422) {
            this.formErrors = error.response.data.errors
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
