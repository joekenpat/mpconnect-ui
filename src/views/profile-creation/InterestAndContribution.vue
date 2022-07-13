<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div2 margin-10">
      <form action="/action_page.php">
        <div class="form-group col-sm-12">
          <label for="pwd">TOPICS OF INTEREST</label>
          <multiselect
            id="functionalSkills"
            name="functionalSkills"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
            placeholder="Select functional skills"
            v-model="interest.topic_of_interests"
            :options="topicOfInterestOptions"
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
            <li v-for="(topicValue, i) in interest.topic_of_interests" :key="i">
              {{ topicValue }}
              <button
                type="button"
                class="button x-btn"
                @click="removeTopicValue(i)"
              >
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
          </ul>
        </div>
        <div class="form-group col-sm-12">
          <label>WHERE WOULD YOU LIKE TO CONTRIBUTE</label>
          <div class="checkbox">
            <label
              ><input
                class="product-category-input"
                type="checkbox"
                v-model="interest.areas_of_contribution"
                value="working-on-projects"
              />
              Working on Projects</label
            >
          </div>
          <p class="lightgray-font">
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain
          </p>
          <div class="checkbox">
            <label
              ><input
                type="checkbox"
                v-model="interest.areas_of_contribution"
                value="develop-proposals"
              />
              Develop Proposals</label
            >
          </div>
          <div class="checkbox">
            <label
              ><input
                type="checkbox"
                v-model="interest.areas_of_contribution"
                value="develop-clients"
              />
              Develop Clients</label
            >
          </div>
          <div class="checkbox">
            <label
              ><input
                type="checkbox"
                v-model="interest.areas_of_contribution"
                value="extend-network"
              />
              Extend Network</label
            >
          </div>
          <div class="checkbox">
            <label
              ><input
                type="checkbox"
                v-model="interest.areas_of_contribution"
                value="build-communities"
              />
              Build Communities</label
            >
          </div>
        </div>
      </form>

      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <button @click="updateUserInterest" class="btn btn-lg red-background">
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./InterestAndContribution.ts"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
