<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div2 margin-10">
      <form action="/action_page.php">
        <h4 class="bold-font">Current Work Status</h4>
        <template v-for="(msg, fe) in formErrors['current_job_status']">
          <span class="red-font" :key="fe"> {{ msg }} </span>
        </template>
        <div
          :class="[
            'radio well-radio col-sm-12',
            { active: workStatus.current_job_status === 'not_available' },
          ]"
        >
          <label
            ><input
              name="current_job_status"
              type="radio"
              value="not_available"
              v-model="workStatus.current_job_status"
            />Not Available</label
          >
        </div>
        <template v-if="workStatus.current_job_status === 'not_available'">
          <div class="form-group col-sm-8">
            <label for="available_for_job_from"
              ><small>WHEN WOULD YOU BE AVAILABLE NEXT?</small></label
            >
            <input
              type="date"
              class="form-control"
              id="available_for_job_from"
              placeholder="Select your available date"
              name="available_for_job_from"
              v-model="workStatus.available_for_job_from"
            />
            <template
              v-for="(msg, fe) in formErrors['available_for_job_from']"
            >
              <span class="red-font" :key="fe"> {{ msg }} </span>
            </template>
          </div>
        </template>
        <div
          :class="[
            'radio well-radio col-sm-12',
            { active: workStatus.current_job_status === 'part_time' },
          ]"
        >
          <label
            ><input
              type="radio"
              name="current_job_status"
              value="part_time"
              v-model="workStatus.current_job_status"
            />Part Time</label
          >
        </div>
        <template v-if="workStatus.current_job_status === 'part_time'">
          <div class="form-group col-sm-6">
            <label for="available_for_job_from"
              ><small>NUMBER OF HOURS PER WEEK</small></label
            >
            <input
              type="number"
              min="1"
              max="40"
              class="form-control"
              id="preferred_job_hours_per_week"
              placeholder="Enter work hours per week"
              name="preferred_job_hours_per_week"
              v-model="workStatus.preferred_job_hours_per_week"
            />
            <template
              v-for="(msg, fe) in formErrors['preferred_job_hours_per_week']"
            >
              <span class="red-font" :key="fe"> {{ msg }} </span>
            </template>
          </div>
          <div class="form-group col-sm-6">
            <label for="available_for_job_from"
              ><small>FUTURE FULLTIME AVAILABILITY</small></label
            >
            <input
              type="date"
              class="form-control"
              id="available_for_fulltime_job_from"
              placeholder="Select starting date"
              name="available_for_fulltime_job_from"
              v-model="workStatus.available_for_fulltime_job_from"
            />
            <template
              v-for="(msg, fe) in formErrors['available_for_fulltime_job_from']"
            >
              <span class="red-font" :key="fe"> {{ msg }} </span>
            </template>
          </div>
        </template>
        <div
          :class="[
            'radio well-radio col-sm-12',
            { active: workStatus.current_job_status === 'full_time' },
          ]"
        >
          <label
            ><input
              type="radio"
              name="current_job_status"
              value="full_time"
              v-model="workStatus.current_job_status"
            />Available Fulltime</label
          >
        </div>
        <template v-if="workStatus.current_job_status === 'full_time'">
          <div class="form-group col-sm-6">
            <label for="available_for_job_from"
              ><small>NUMBER OF HOURS PER WEEK</small></label
            >
            <input
              type="number"
              min="1"
              max="40"
              class="form-control"
              id="preferred_job_hours_per_week"
              placeholder="Enter work hours per week"
              name="preferred_job_hours_per_week"
              v-model="workStatus.preferred_job_hours_per_week"
            />
            <template
              v-for="(msg, fe) in formErrors['preferred_job_hours_per_week']"
            >
              <span class="red-font" :key="fe"> {{ msg }} </span>
            </template>
          </div>
        </template>
        <template v-for="(msg, fe) in formErrors['preferred_job_countries']">
          <span class="red-font" :key="fe"> {{ msg }} </span>
        </template>
        <div class="form-group col-sm-12">
          <h5 class="font-600">WORK TYPE</h5>
          <div class="checkbox-inline">
            <label
              ><input
                type="radio"
                value="remote"
                v-model="workStatus.preferred_job_location_type"
                name="preferred_job_location_type"
                id="preferred_job_location_type"
              />
              Remote</label
            >
          </div>

          <div class="checkbox-inline">
            <label
              ><input
                type="radio"
                value="onsite"
                v-model="workStatus.preferred_job_location_type"
                name="preferred_job_location_type"
                id="preferred_job_location_type"
              />
              On-site</label
            >
          </div>
          <template
            v-for="(msg, fe) in formErrors['preferred_job_location_type']"
          >
            <div :key="fe">
              <span class="red-font" :key="fe"> {{ msg }} </span>
            </div>
          </template>
        </div>
        <div class="form-group col-sm-12">
          <label for="preferred_job_countries"
            >LOCATIONS INTERESTED TO WORK IN</label
          >
          <multiselect
            id="preferred_job_countries"
            name="preferred_job_countries"
            placeholder="Select interested countries"
            v-model="workStatus.preferred_job_countries"
            :options="countryOptions"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
          >
            <template slot="selection" slot-scope="{ values, search, isOpen }"
              ><span
                class="multiselect__multiple"
                v-if="values.length &amp;&amp; !isOpen"
                >{{ values.length }} country selected</span
              ></template
            >
          </multiselect>
          <template v-for="(msg, fe) in formErrors['preferred_job_countries']">
            <span class="red-font" :key="fe"> {{ msg }} </span>
          </template>
        </div>
      </form>
      <br />
      <div class="row pad-20 col-sm-12">
        <p class="lightgray-font">
          Save the above information to continue to next step.
        </p>
        <button
          type="button"
          @click="updateUserWorkStatus"
          class="btn btn-lg red-background"
        >
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./TimeAvailability.ts"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
