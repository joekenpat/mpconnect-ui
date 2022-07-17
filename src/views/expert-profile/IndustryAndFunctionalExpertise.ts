import { $http } from "@/services/http-common";
import {
  ExpertIndustryOrSkillDTO,
  IExpertIndustryOrSkillDTO,
} from "@/services/IndustryExperienceDTO";
import { jsonToFormData } from "@/services/JsonToFormData";
import Vue from "vue";
import Multiselect from "vue-multiselect";

export default Vue.extend({
  props: {
    expertProfileId: {
      type: Number,
      required: true,
    },
  },
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
          new ExpertIndustryOrSkillDTO({
            id: null,
            name,
            type: "functional_skill",
            expert_profile_id: this.expertProfileId,
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
          new ExpertIndustryOrSkillDTO({
            id: null,
            name,
            type: "industry_experience",
            expert_profile_id: this.expertProfileId,
          })
      ),
      expertIndustryAndSkill: {
        industry_experiences: [] as ExpertIndustryOrSkillDTO[],
        functional_skills: [] as ExpertIndustryOrSkillDTO[],
      },
    };
  },
  created() {
    if (this.expertProfileId !== 0) {
      this.fetchExpertIndustryOrSkills();
    }
  },
  components: {
    Multiselect,
  },
  methods: {
    removeIndustryExperienceValue(index: number): void {
      this.expertIndustryAndSkill.industry_experiences.splice(index, 1);
    },
    removeFunctionalSkillValue(index: number): void {
      this.expertIndustryAndSkill.functional_skills.splice(index, 1);
    },
    fetchExpertIndustryOrSkills(): void {
      $http
        .get("/expert-profile/" + this.expertProfileId + "/skill")
        .then(({ data }) => {
          console.log(data.skills as ExpertIndustryOrSkillDTO[]);
          this.expertIndustryAndSkill.functional_skills = data.skills
            .map(
              (skill: IExpertIndustryOrSkillDTO) =>
                new ExpertIndustryOrSkillDTO(skill)
            )
            .filter(
              (skill: IExpertIndustryOrSkillDTO) =>
                skill.type === "functional_skill"
            );
          this.expertIndustryAndSkill.industry_experiences = data.skills
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
    updateExpertIndustryOrSkills(): void {
      const { functional_skills, industry_experiences } =
        this.expertIndustryAndSkill;
      $http
        .post(
          "/expert-profile/update/skill",
          jsonToFormData({
            expert_profile_id: this.expertProfileId,
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
            name: "expert-profile-project-reference",
            params: { expertProfileId: data.profile.id },
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
