<template>
  <div class="PC-grid2">
    <div class="margin-10 row">
      <form>
        <template v-for="(workExperience, we) in workExperiences">
          <p :key="we + 'title'" class="work-exp gray-background col-sm-12">
            <span class="badge">{{ we + 1 }}</span>
            Work Experience
          </p>
          <!-- </div>Job invitation main closing tag -->
          <div :key="we + 'form-items'" class="PC-grid2-div2 margin-10">
            <div class="form-group col-sm-6">
              <label :for="`employerName_${we}`">NAME OF EMPLOYER</label>
              <input
                type="text"
                class="form-control"
                :id="`employerName_${we}`"
                placeholder="Enter your employer name"
                :name="`employerName_${we}`"
                v-model="workExperiences[we].employerName"
              />
            </div>
            <div class="form-group col-sm-6">
              <label :for="`jobTitle_${we}`">JOB TITLE</label>
              <input
                type="text"
                class="form-control"
                :id="`jobTitle_${we}`"
                placeholder="Enter your job title"
                :name="`jobTitle_${we}`"
                v-model="workExperiences[we].jobTitle"
              />
            </div>
            <div class="form-group col-sm-12">
              <label :for="`industry_${we}`">ENTER YOUR INDUSTRY</label>
              <input
                type="text"
                class="form-control"
                :id="`industry_${we}`"
                placeholder="Enter your industry"
                :name="`industry_${we}`"
                v-model="workExperiences[we].industry"
              />
            </div>
            <div class="form-group col-sm-12">
              <label :for="`handsOnTechnology_${we}`"
                >HANDS ON TECHNOLOGY</label
              >
              <multiselect
                :id="`handsOnTechnology_${we}`"
                :name="`handsOnTechnology_${we}`"
                :multiple="true"
                :searchable="true"
                :close-on-select="false"
                placeholder="Select hands on technology"
                v-model="workExperiences[we].handsOnTechnology"
                :options="handsOnTechnologyOptions"
              >
                <template
                  slot="selection"
                  slot-scope="{ values, search, isOpen }"
                  ><span
                    class="multiselect__multiple"
                    v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} options selected</span
                  ></template
                >
              </multiselect>
            </div>
            <div class="hands-on-technology col-sm-12">
              <ul class="technology-list list-inline">
                <li
                  v-for="(handsOnTechnologyValue, i) in workExperiences[we]
                    .handsOnTechnology"
                  :key="i"
                >
                  {{ handsOnTechnologyValue }}
                  <button
                    type="button"
                    class="button x-btn"
                    @click="removeHandsOnTechnologyValue(we, i)"
                  >
                    <span class="fa fa-times-circle"></span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="form-group col-sm-6">
              <label :for="`startDate_${we}`">START DATE</label>
              <multiselect
                :id="`startDate_${we}`"
                :name="`startDate_${we}`"
                placeholder="Select start date"
                v-model="workExperiences[we].startDate"
                :options="startDateOptions"
              >
              </multiselect>
            </div>
            <div class="form-group col-sm-6">
              <label :for="`startYear_${we}`">START YEAR</label>
              <multiselect
                :id="`startYear_${we}`"
                :name="`startYear_${we}`"
                placeholder="Select start year"
                v-model="workExperiences[we].startYear"
                :options="startYearOptions"
              >
              </multiselect>
            </div>
            <div class="form-group col-sm-12">
              <div class="checkbox">
                <label
                  ><input
                    class="product-category-input"
                    type="checkbox"
                    :value="true"
                    :id="`currentlyWorkHere_${we}`"
                    :name="`currentlyWorkHere_${we}`"
                    v-model="workExperiences[we].currentlyWorkHere"
                  />
                  I am currently working in this role</label
                >
              </div>
            </div>
            <div
              v-show="!workExperiences[we].currentlyWorkHere"
              class="form-group col-sm-6"
            >
              <label :for="`endDate_${we}`">END DATE</label>
              <multiselect
                :id="`endDate_${we}`"
                :name="`endDate_${we}`"
                placeholder="Select end date"
                v-model="workExperiences[we].endDate"
                :options="endDateOptions"
              >
              </multiselect>
            </div>
            <div
              v-show="!workExperiences[we].currentlyWorkHere"
              class="form-group col-sm-6"
            >
              <label :for="`endYear_${we}`">END YEAR</label>
              <multiselect
                :id="`endYear_${we}`"
                :name="`endYear_${we}`"
                placeholder="Select end year"
                v-model="workExperiences[we].endYear"
                :options="endYearOptions"
              >
              </multiselect>
            </div>

            <div class="form-group col-sm-12">
              <label :for="`description_${we}`">DESCRIPTION</label>
              <textarea
                class="form-control"
                rows="10"
                :id="`description_${we}`"
                :name="`description_${we}`"
                placeholder="Enter description here"
                v-model="workExperiences[we].description"
              ></textarea>
            </div>
          </div>
        </template>
      </form>
      <div class="PC-grid2-div2 margin-10">
        <button
          type="button"
          class="btn btn-block white-background red-border red-font"
          @click="addNewWorkExperience"
        >
          <span class="fa fa-plus"></span> ADD NEW WORK HISTORY
        </button>
        <br />
        <p class="lightgray-font">
          Save the above information to continue to next step.
        </p>
        <router-link
          :to="{ name: 'profile-creation-project-reference' }"
          v-slot="{ href, navigate }"
        >
          <button
            :href="href"
            @click="navigate"
            class="btn btn-lg red-background"
          >
            SAVE & CONTINUE
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts">
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      workExperiences: [
        {
          employerName: "",
          jobTitle: "",
          industry: "",
          handsOnTechnology: [],
          startDate: "",
          startYear: "",
          endDate: "",
          endYear: "",
          currentlyWorkHere: false,
        },
      ],
      handsOnTechnologyOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
      ],
    };
  },
  computed: {
    startDateOptions(): number[] {
      return this.range(31, 1);
    },
    endDateOptions(): number[] {
      return this.range(31, 1);
    },
    startYearOptions(): number[] {
      return this.range(60, 2022 - 60);
    },
    endYearOptions(): number[] {
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
    removeHandsOnTechnologyValue(experienceIndex: number, index: number): void {
      this.workExperiences[experienceIndex].handsOnTechnology.splice(index, 1);
    },
    addNewWorkExperience(): void {
      this.workExperiences.push({
        employerName: "",
        jobTitle: "",
        industry: "",
        handsOnTechnology: [],
        startDate: "",
        startYear: "",
        endDate: "",
        endYear: "",
        currentlyWorkHere: false,
      });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
