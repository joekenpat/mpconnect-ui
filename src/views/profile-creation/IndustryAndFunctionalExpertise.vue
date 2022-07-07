<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div2 margin-10">
      <form>
        <div class="form-group col-sm-12">
          <div class="row">
            <label for="handsOnTechnology" class="text-left col-sm-6"
              >INDUSTRY EXPERIENCE</label
            >
            <p class="text-right red-font col-sm-6">
              Select a minimum of 10 industry experience
            </p>
          </div>
          <multiselect
            id="handsOnTechnology"
            name="handsOnTechnology"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
            placeholder="Select industry experience"
            v-model="experiences.handsOnTechnology"
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
              ) in experiences.handsOnTechnology"
              :key="i"
            >
              {{ handsOnTechnologyValue }}
              <button
                type="button"
                class="button x-btn"
                @click="removeHandsOnTechnologyValue(i)"
              >
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
          </ul>
        </div>
        <div class="form-group col-sm-12">
          <div class="row">
            <label for="functionalSkills" class="text-left col-sm-6"
              >FUNCTIONAL SKILLS</label
            >
            <p class="text-right red-font col-sm-6">
              Select a minimum of 5 functional skills
            </p>
          </div>
          <multiselect
            id="functionalSkills"
            name="functionalSkills"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
            placeholder="Select functional skills"
            v-model="experiences.functionalSkills"
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
              v-for="(functionalSkillsValue, i) in experiences.functionalSkills"
              :key="i"
            >
              {{ functionalSkillsValue }}
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
      <router-link
        :to="{ name: 'profile-creation-functional-skills' }"
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
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts">
import Multiselect from "vue-multiselect";

export default {
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
      ],
      handsOnTechnologyOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
        "Scala",
        "Vue.js",
      ],
      experiences: {
        handsOnTechnology: [],
        functionalSkills: [],
      },
    };
  },
  components: {
    Multiselect,
  },
  methods: {
    removeHandsOnTechnologyValue(index: number): void {
      this.experiences.handsOnTechnology.splice(index, 1);
    },
    removeFunctionalSkillValue(index: number): void {
      this.experiences.functionalSkills.splice(index, 1);
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
