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
<template>
  <div class="PC-grid2">
    <div class="margin-10 row">
      <form action="">
        <template v-for="(workExperience, we) in workExperiences">
          <!-- <div class="PC-grid2-div1"> -->
          <p :key="we + 'title'" class="work-exp gray-background col-sm-12">
            <span class="badge">{{ we + 1 }}</span>
            Work Experience
          </p>
          <!-- </div>Job invitation main closing tag -->
          <div :key="we + 'form-items'" class="PC-grid2-div2 margin-10">
            <div class="form-group col-sm-6">
              <label :for="`employerName[${we}]`">NAME OF EMPLOYER</label>
              <input
                type="text"
                class="form-control"
                :id="`employerName[${we}]`"
                placeholder="Enter your employer name"
                :name="`employerName[${we}]`"
                v-model="workExperiences[we].employerName"
              />
            </div>
            <div class="form-group col-sm-6">
              <label :for="`jobTitle[${we}]`">JOB TITLE</label>
              <input
                type="text"
                class="form-control"
                :id="`jobTitle[${we}]`"
                placeholder="Enter your job title"
                :name="`jobTitle[${we}]`"
                v-model="workExperiences[we].jobTitle"
              />
            </div>
            <div class="form-group col-sm-12">
              <label :for="`industry[${we}]`">ENTER YOUR INDUSTRY</label>
              <input
                type="text"
                class="form-control"
                :id="`industry[${we}]`"
                placeholder="Enter your industry"
                :name="`industry[${we}]`"
                v-model="workExperiences[we].industry"
              />
            </div>
            <div class="form-group col-sm-12">
              <label :for="`handsOnTechnology[${we}]`"
                >HANDS ON TECHNOLOGY</label
              >
              <multiselect
                :id="`handsOnTechnology[${we}]`"
                :name="`handsOnTechnology[${we}]`"
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
              <label :for="`startDate[${we}]`">START DATE</label>
              <multiselect
                :id="`startDate[${we}]`"
                :name="`startDate[${we}]`"
                placeholder="Select start date"
                v-model="workExperiences[we].startDate"
                :options="startDateOptions"
              >
              </multiselect>
            </div>
            <div class="form-group col-sm-6">
              <label :for="`startYear[${we}]`">START YEAR</label>
              <multiselect
                :id="`startYear[${we}]`"
                :name="`startYear[${we}]`"
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
                    :id="`currentlyWorkHere[${we}]`"
                    :name="`currentlyWorkHere[${we}]`"
                    v-model="workExperiences[we].currentlyWorkHere"
                  />
                  I am currently working in this role</label
                >
              </div>
            </div>
            <template v-if="!workExperiences[we].currentlyWorkHere">
              <div class="form-group col-sm-6">
                <label :for="`endDate[${we}]`">END DATE</label>
                <multiselect
                  :id="`endDate[${we}]`"
                  :name="`endDate[${we}]`"
                  placeholder="Select end date"
                  v-model="workExperiences[we].endDate"
                  :options="endDateOptions"
                >
                </multiselect>
              </div>
              <div class="form-group col-sm-6">
                <label :for="`endYear[${we}]`">END YEAR</label>
                <multiselect
                  :id="`endYear[${we}]`"
                  :name="`endYear[${we}]`"
                  placeholder="Select end year"
                  v-model="workExperiences[we].endYear"
                  :options="endYearOptions"
                >
                </multiselect>
              </div>
            </template>
            <div class="form-group col-sm-12">
              <label :for="`description[${we}]`">DESCRIPTION</label>
              <textarea
                class="form-control"
                rows="10"
                :id="`description[${we}]`"
                :name="`description[${we}]`"
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
        <button type="submit" class="btn btn-lg red-background">
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
