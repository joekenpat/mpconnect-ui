<template>
  <div class="PS-container">
    <h2 class="white-font text-center temp-text">
      <em class="fa fa-camera"></em> Add a Background Photo
    </h2>
    <main class="PS-main">
      <div class="PS-grid1">
        <div
          class="profile-section white-background pad-20 border-radius-5 vertical-margin-10"
        >
          <div class="flex-row">
            <img :src="avatar" class="profile-picture" alt="Profile Picture" />
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
              <p><ul class="technology-list list-inline">
              <li
                v-for="(
                  hotValue, cwe
                ) in personalInformation.countries_of_work_experience"
                :key="cwe"
              >
                {{ hotValue }}
              </li>
            </ul></p>
            </div>
          </div>
        </div>
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Short Bio (CV Summary)</h3>
            <router-link
              to="/profile-creation/short-bio"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <p class="lightgray-font pad-10">
            {{ userBio.short_bio }}
          </p>
        </div>
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Work History</h3>
            <router-link
              to="/profile-creation/work-history"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div
            class="PS-cards pad-10"
            v-for="(uwe, we) in workExperiences"
            :key="we"
          >
            <div class="profile-section side-margin-10">
              <h4 class="bold-font">{{ uwe.job_title }}r</h4>
              <button type="button" class="btn delete-btn">
                <em class="fa fa-trash"></em>
              </button>
            </div>
            <h4 class="side-margin-10">{{ uwe.employer_name }}</h4>
            <h4 class="side-margin-10">{{ uwe.industry }}</h4>
            <div class="hands-on-technology side-margin-10">
              <ul class="technology-list list-inline">
                <li
                  v-for="(hotValue, hot) in uwe.hands_on_technology"
                  :key="we + hot"
                >
                  {{ hotValue }}
                </li>
              </ul>
            </div>
            <p class="lightgray-font pad-10">
              {{ numberToMonth(parseInt(uwe.start_month||"0")) }} {{ uwe.start_year }} -
              <template v-if="uwe.is_current_role">Current</template>
              <template v-else>
                {{ numberToMonth(parseInt(uwe.end_month||"0")) }} {{ uwe.end_year }} -
                {{
                  parseInt(uwe.end_year || "0") -
                  parseInt(uwe.start_year || "0")
                }}
                Yr
              </template>
            </p>
            <p class="lightgray-font pad-10">{{ uwe.description }}.</p>
          </div>
          <div class="side-margin-10">

             <router-link
              to="/profile-creation/work-history"
              class="btn edit-profile"
              v-slot="{href, _, navigate}"
            >
            <button
              :href="href"
              @click="navigate"
              class="btn btn-block white-background red-border red-font vertical-pad-10 bold-font"
            >
              <span class="fa fa-plus"></span> ADD NEW WORK HISTORY
            </button>
              </router-link>
          </div>
        </div>
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Project References</h3>
            <router-link
              to="/profile-creation/project-reference"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div
            class="PS-cards pad-10"
            v-for="(prValue, pr) in projectReferences"
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
          <div class="side-margin-10">
            <router-link
              to="/profile-creation/project-reference"
              class="btn edit-profile"
              v-slot="{href, _, navigate}"
            >
            <button
              :href="href"
              @click="navigate"
              class="btn btn-block white-background red-border red-font vertical-pad-10 bold-font"
            >
              <span class="fa fa-plus"></span> ADD NEW PROJECT
            </button>
              </router-link>
          </div>
        </div>
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Industry Experience</h3>
            <router-link
              to="/profile-creation/industry-and-functional-expertise"
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
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Functional Skills</h3>
            <router-link
              to="/profile-creation/industry-and-functional-expertise"
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
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Work Status</h3>
            <button type="button" class="btn edit-profile">
              <em class="fa fa-pencil pad-10"></em>Edit
            </button>
          </div>
          <div
            class="pink-bg side-margin-10 pad-5 vertical-margin-10 border-radius-5"
          >
            <h4 class="red-font side-margin-10">Current Work Status</h4>
          </div>
          <div class="side-margin-10 lightgray-bottom-border vertical-pad-10">
            <h3>
              <span class="fa fa-check-circle red-font"></span> Not Available
            </h3>
          </div>
          <div class="margin-10">
            <h5 class="lightgray-font font-600">
              LOCATIONS INTERESTED TO WORK IN
            </h5>
            <ul class="PS-card-list">
              <li>United States of America (USA)</li>
              <li>Czech Republic</li>
            </ul>
          </div>
          <div class="margin-10">
            <h5 class="lightgray-font font-600">WORK TYPE</h5>
            <ul class="PS-card-list">
              <li>Onsite</li>
              <li>Remote</li>
            </ul>
          </div>
          <div class="margin-10">
            <h5 class="lightgray-font font-600">
              LOCATIONS INTERESTED TO WORK IN
            </h5>
            <p>09:00 AM to 01:00 PM (4 hours)</p>
          </div>
        </div>
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Awards / Certifications</h3>
            <router-link
              to="/profile-creation/awards-and-certification"
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
          <div class="side-margin-10">
            <button
              type="button"
              class="btn btn-block white-background red-border red-font vertical-pad-10 bold-font"
            >
              <span class="fa fa-plus"></span> ADD NEW AWARDS/CERTIFICATION
            </button>
          </div>
        </div>
        <div class="bio-section">
          <div class="profile-section side-margin-10">
            <h3>Area of Interest</h3>
            <router-link
              to="/profile-creation/interest-and-contribution"
              class="btn edit-profile"
            >
              <em class="fa fa-pencil pad-10"></em>Edit
            </router-link>
          </div>
          <div class="hands-on-technology margin-10">
            <ul class="technology-list list-inline">
              <li v-for="(itoi, toi) in interest.topic_of_interests" :key="toi">
                {{ itoi }}
              </li>
            </ul>
          </div>
          <div class="margin-10">
            <h5 class="lightgray-font font-600">
              WHERE DID YOU HEAR ABOUT THIS PLATFORM FROM
            </h5>
            <p>{{ personalInformation.utm_medium }}</p>
          </div>
          <div class="margin-10">
            <h5 class="lightgray-font font-600">NAME OF THE PROFESSIONAL</h5>
            <p>{{ personalInformation.name_of_professional }}</p>
          </div>
          <div class="margin-10">
            <h5 class="lightgray-font font-600">
              WHERE WOULD YOU LIKE TO CONTRIBUTE
            </h5>
            <p>Working on Projects</p>

            <p class="lightgray-font">
              There are over 2 million apps on the App Store and growing. The
              only ones that do well are the ones that are well designed both in
              terms of user interface and user experience. That's why it is so
              important to learn the design skills that will make your app stand
              out in a crowd.
            </p>
            <p>Building Communties</p>

            <p class="lightgray-font">
              There are over 2 million apps on the App Store and growing. The
              only ones that do well are the ones that are well designed both in
              terms of user interface and user experience. That's why it is so
              important to learn the design skills that will make your app stand
              out in a crowd.
            </p>
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
              <a
                href="#"
                class="red-font setup-profile-link bold-font vertical-margin-10"
                >SETUP PROFILE</a
              >
            </div>
          </div>
        </div>
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
<script lang="ts" src="./ProfileCreationSummary.ts"></script>
