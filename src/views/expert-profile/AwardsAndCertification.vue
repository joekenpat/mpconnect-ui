<template>
  <div class="pad-10 white-background border-radius-5">
    <div class="bio-section">
      <p>Select Awards / Certifications</p>
      <div class="profile-section side-margin-10"></div>
      <div
        class="PS-cards pad-10"
        v-for="(prValue, pr) in awardsAndCertifications"
        :key="pr"
      >
        <div class="profile-section side-margin-10">
          <h4 class="bold-font">{{ prValue.title }}</h4>
          <div>
            <input
              type="checkbox"
              v-model="expertAwardsAndCertificationsIds"
              :value="prValue.id"
            />
          </div>
        </div>
        <p class="lightgray-font pad-10">
          {{ prValue.description }}
        </p>
        <a href="#" class="side-margin-10 file-link"
          ><span class="fa fa-file-pdf-o red-font pad-10"></span
          >Project_case_Study_doc.pdf</a
        >
      </div>
      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <button
        @click="updateExpertCertifications"
        class="btn btn-lg red-background"
      >
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./AwardsAndCertification.ts"></script>
