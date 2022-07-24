<template>
  <div class="PS-container" :key="expertProfileId">
    <h2 class="white-font text-center temp-text">
      <em class="fa fa-camera"></em> Add a Background Photo
    </h2>
    <main class="PS-main">
      <div class="PS-grid1">
        <div class="white-background pad-20 border-radius-5 vertical-margin-10">
          <div class="profile-section vertical-margin-5">
            <div class="flex-row">
              <img
                :src="personalInformation?.profile_image || avatar"
                class="profile-picture"
                alt="Profile Picture"
              />
              <h2>{{ fullName }}</h2>
            </div>
            <div class="flex-row">
              <button type="button" class="btn download-profile">
                <em class="fa fa-download"></em> Download Profile
              </button>
              <button type="button" class="btn edit-profile">
                <em class="fa fa-pencil pad-10"></em>Edit
              </button>
            </div>
          </div>
          <div class="row pad-20">
            <router-link
              v-for="(profile, p) in expertProfiles"
              :key="p"
              :to="{
                name: 'expert-profile-summary',
                params: {
                  expertProfileId: profile.id,
                },
              }"
              active-class="active"
              class="btn add-expert-profile font-600 side-margin-5"
            >
              {{ profile.name }}
            </router-link>
            <router-link
              to="/expert-profile/0/personal-information"
              active-class="active"
              class="btn add-expert-profile red-dotted red-font font-600"
            >
              + Create New
            </router-link>
          </div>
        </div>
        <div class="white-background pad-20 border-radius-5">
          <div class="profile-section side-margin-10">
            <h3>Personal Information</h3>
            <router-link
              to="/profile-creation/personal-information"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div
            class="row side-margin-10 lightgray-bottom-border vertical-pad-10"
          >
            <div class="col-sm-6">
              <h4>Gender</h4>
              <p>{{ personalInformation.gender }}</p>
            </div>
            <div class="col-sm-6">
              <h4>Nationality</h4>
              <p>{{ personalInformation.nationality }}</p>
            </div>
          </div>
          <div
            class="row side-margin-10 lightgray-bottom-border vertical-pad-10"
          >
            <div class="col-sm-12">
              <h4>Current Address</h4>
              <p>{{ personalInformation.current_address }}</p>
            </div>
          </div>
          <div
            class="row side-margin-10 lightgray-bottom-border vertical-pad-10"
          >
            <div class="col-sm-6">
              <h4>Mobile Number</h4>
              <p>{{ personalInformation.mobile_phone }}</p>
            </div>
            <div class="col-sm-6">
              <h4>Current Job Title</h4>
              <p>{{ personalInformation.current_job_title }}</p>
            </div>
          </div>
          <div
            class="row side-margin-10 lightgray-bottom-border vertical-pad-10"
          >
            <div class="col-sm-6">
              <h4>Total Years of Work Experience</h4>
              <p>{{ personalInformation.years_of_work_experience }} Years</p>
            </div>
            <div class="col-sm-6">
              <h4>Countries of Work Experience</h4>
              <ul class="technology-list list-inline">
                <li
                  v-for="(
                    hotValue, cwe
                  ) in personalInformation.countries_of_work_experience"
                  :key="cwe"
                >
                  {{ hotValue }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bio-section" v-if="expertProfileId && currentExpertProfile">
          <div class="profile-section side-margin-10">
            <h3>Description</h3>
            <router-link
              :to="{
                name: 'expert-profile-personal-information',
                params: {
                  expertProfileId: expertProfileId,
                },
              }"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <p class="lightgray-font pad-10">
            {{ currentExpertProfile.description }}
          </p>
        </div>
        <div
          class="bio-section"
          v-if="expertProfileId && expertProjectReference.length > 0"
        >
          <div class="profile-section side-margin-10">
            <h3>Project References</h3>
            <router-link
              :to="{
                name: 'expert-profile-project-reference',
                params: {
                  expertProfileId: expertProfileId,
                },
              }"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div
            class="PS-cards pad-10"
            v-for="(prValue, pr) in expertProjectReference"
            :key="pr"
          >
            <div class="profile-section side-margin-10">
              <h4 class="bold-font">{{ prValue.name_of_client }}</h4>
              <div>
                <button type="button" class="btn delete-btn">
                  <em class="fa fa-trash"></em>
                </button>
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
        </div>
        <div
          class="bio-section"
          v-if="expertProfileId && industry_experiences.length > 0"
        >
          <div class="profile-section side-margin-10">
            <h3>Industry Experience</h3>
            <router-link
              :to="{
                name: 'expert-profile-industry-and-functional-expertise',
                params: {
                  expertProfileId: expertProfileId,
                },
              }"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div class="hands-on-technology margin-10">
            <ul class="technology-list list-inline">
              <li v-for="(ieValue, ie) in industry_experiences" :key="ie">
                {{ ieValue.name }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bio-section"
          v-if="expertProfileId && functional_skills.length > 0"
        >
          <div class="profile-section side-margin-10">
            <h3>Functional Skills</h3>
            <router-link
              :to="{
                name: 'expert-profile-industry-and-functional-expertise',
                params: {
                  expertProfileId: expertProfileId,
                },
              }"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div class="hands-on-technology margin-10">
            <ul class="technology-list list-inline">
              <li v-for="(fsValue, fs) in functional_skills" :key="fs">
                {{ fsValue.name }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bio-section"
          v-if="expertProfileId && awardsAndCertifications.length > 0"
        >
          <div class="profile-section side-margin-10">
            <h3>Awards / Certifications</h3>
            <router-link
              :to="{
                name: 'expert-profile-awards-and-certification',
                params: {
                  expertProfileId: expertProfileId,
                },
              }"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div
            class="PS-cards pad-10"
            v-for="(aacValue, aac) in awardsAndCertifications"
            :key="aac"
          >
            <div class="profile-section side-margin-10">
              <h4 class="bold-font">{{ aacValue.title }}</h4>
              <div>
                <button type="button" class="btn delete-btn">
                  <em class="fa fa-trash"></em>
                </button>
              </div>
            </div>
            <p class="lightgray-font pad-10">
              {{ aacValue.description }}
            </p>
            <a href="#" class="side-margin-10 file-link"
              ><span class="fa fa-file-pdf-o red-font pad-10"></span
              >Project_case_Study_doc.pdf</a
            >
          </div>
        </div>
      </div>
      <!-- PC-grid1 closing tag-->

      <div class="PS-grid2">
        <div
          class="profile-completion-container white-background vertical-margin-10"
        >
          <p class="bold-font side-margin-10 pad-10">Profile Completion</p>
          <div class="profile-completion">
            <img
              :src="avatar"
              alt="profile-completion-status"
              class="profile-completion-image"
            />
            <div>
              <h2>20%</h2>
              <p>Profile setup pending</p>
              <router-link
                v-if="expertProfileId"
                :to="{
                  name: 'expert-profile-personal-information',
                  params: { expertProfileId: expertProfileId },
                }"
                class="red-font setup-profile-link bold-font vertical-margin-10"
                >SETUP THIS EXPERT PROFILE</router-link
              >
            </div>
          </div>
        </div>
        <router-link
          to="/profile-creation-summary"
          class="btn btn-block red-background white-font font-600"
        >
          GOTO PROFILE
        </router-link>
        <a
          href="http://portal.mp-connect.me/dashboard"
          class="btn btn-block red-background white-font font-600"
        >
          GOTO DASHBOARD
        </a>
      </div>
      <!--PC-grid2 closing tag-->

      <!-- </div> -->
    </main>
    <!--FJF main closing tag-->
  </div>
  <!--Main body container closing tag-->
</template>
<script lang="ts" src="./ExpertProfileSummary.ts"></script>
