import {
  EmptyUserWorkExperienceDTO,
  IUserWorkExperienceDTO,
  IUserWorkExperienceErrorsDTO,
  UserWorkExperienceDTO,
} from "@/services/WorkExperienceDTO";
import { $http } from "@/services/http-common";
import Vue from "vue";
import Multiselect from "vue-multiselect";
import { jsonToFormData } from "@/services/JsonToFormData";
import { isEqual } from "lodash";
import { numberToMonthName } from "@/services/CalendarMonthUtil";

export default Vue.extend({
  data() {
    return {
      workExperiences: [
        EmptyUserWorkExperienceDTO(),
      ] as UserWorkExperienceDTO[],
      handsOnTechnologyOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
      ],
      formErrors: {} as { [key: string]: string[] },
    };
  },
  created() {
    this.fetchUserWorkExperiences();
  },
  computed: {
    monthDurationOptions(): number[] {
      return this.range(12, 1);
    },
    yearDurationOptions(): number[] {
      return this.range(60, 2022 - 60);
    },
  },
  components: {
    Multiselect,
  },
  methods: {
    range(N: number, startAt: number = 1): number[] {
      return Array(N)
        .fill(startAt - 1)
        .map((v, i) => v + (i + 1));
    },
    numberToMonth(number: number) {
      return numberToMonthName(number);
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
          if (!this.workExperiences.length) {
            this.addNewWorkExperience();
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
    removeHandsOnTechnologyValue(experienceIndex: number, index: number): void {
      this.workExperiences[experienceIndex].hands_on_technology.splice(
        index,
        1
      );
    },
    addNewWorkExperience(): void {
      this.workExperiences.push(EmptyUserWorkExperienceDTO());
    },
    updateWorkExperiences(): void {
      $http
        .post(
          "/profile/update/work-experience",
          jsonToFormData({
            work_experiences: this.workExperiences.filter((exp) =>
              !isEqual(exp, EmptyUserWorkExperienceDTO())
            ),
          })
        )
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({ name: "profile-creation-project-reference" });
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
