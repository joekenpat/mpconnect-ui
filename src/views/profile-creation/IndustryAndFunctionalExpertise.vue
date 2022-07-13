<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div2 margin-10">
      <form>
        <div class="form-group col-sm-12">
          <div class="row">
            <label for="industry_experiences" class="text-left col-sm-6"
              >INDUSTRY EXPERIENCE</label
            >
            <p class="text-right red-font col-sm-6">
              Select a minimum of 10 industry experience
            </p>
          </div>
          <multiselect
            id="industry_experiences"
            name="industry_experiences"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
            label="name"
            track-by="name"
            placeholder="Select industry experience"
            v-model="userIndustryAndSkill.industry_experiences"
            :options="handsOnTechnologyOptions"
          >
            <template slot="selection" slot-scope="{ values, search, isOpen }"
              ><span
                class="multiselect__multiple"
                v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} experience selected</span
              ></template
            >
          </multiselect>
        </div>
        <div class="hands-on-technology col-sm-12">
          <ul class="technology-list list-inline">
            <li
              v-for="(
                handsOnTechnologyValue, i
              ) in userIndustryAndSkill.industry_experiences"
              :key="i"
            >
              {{ handsOnTechnologyValue.name }}
              <button
                type="button"
                class="button x-btn"
                @click="removeIndustryExperienceValue(i)"
              >
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
          </ul>
        </div>
        <div class="form-group col-sm-12">
          <div class="row">
            <label for="functional_skills" class="text-left col-sm-6"
              >FUNCTIONAL SKILLS</label
            >
            <p class="text-right red-font col-sm-6">
              Select a minimum of 5 functional skills
            </p>
          </div>
          <multiselect
            id="functional_skills"
            name="functional_skills"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
            label="name"
            track-by="name"
            placeholder="Select functional skills"
            v-model="userIndustryAndSkill.functional_skills"
            :options="functionalSkillsOptions"
          >
            <template slot="selection" slot-scope="{ values, search, isOpen }"
              ><span
                class="multiselect__multiple"
                v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} skill selected</span
              ></template
            >
          </multiselect>
        </div>
        <div class="hands-on-technology col-sm-12">
          <ul class="technology-list list-inline">
            <li
              v-for="(
                functionalSkillsValue, i
              ) in userIndustryAndSkill.functional_skills"
              :key="i"
            >
              {{ functionalSkillsValue.name }}
              <button
                type="button"
                class="button x-btn"
                @click="removeFunctionalSkillValue(i)"
              >
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
          </ul>
        </div>
      </form>

      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <button
        @click="updateUserIndustryOrSkills"
        class="btn btn-lg red-background"
      >
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./IndustryAndFunctionalExpertise.ts"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
