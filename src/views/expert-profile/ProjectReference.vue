<template>
  <div class="pad-10 white-background border-radius-5">
    <div class="bio-section">
      <p>Select project reference</p>
      <div class="profile-section side-margin-10"></div>
      <div
        class="PS-cards pad-10"
        v-for="(prValue, pr) in projectReferences"
        :key="pr"
      >
        <div class="profile-section side-margin-10">
          <h4 class="bold-font">{{ prValue.name_of_client }}</h4>
          <div>
            <input
              type="checkbox"
              v-model="expertProjectReferenceIds"
              :value="prValue.id"
            />
          </div>
        </div>
        <h4 class="side-margin-10">{{ prValue.industry }}</h4>
        <div class="hands-on-technology side-margin-10">
          <ul class="technology-list list-inline">
            <li
              v-for="(fsValue, fs) in prValue.functional_skills"
              :key="pr + fs"
            >
              {{ fsValue }}
            </li>
          </ul>
        </div>
        <a href="#" class="side-margin-10 file-link"
          ><span class="fa fa-file-pdf-o red-font pad-10"></span
          >Project_case_Study_doc.pdf</a
        >
        <p class="lightgray-font pad-10">
          {{ prValue.description }}
        </p>
      </div>
      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <button
        @click="updateExpertProjectReferences"
        class="btn btn-lg red-background"
      >
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./ProjectReference.ts"></script>
