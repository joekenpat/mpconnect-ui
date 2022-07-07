<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div1">
      <p>UPLOAD YOUR PROFILE PICTURE</p>
      <div>
        <img
          :src="personalInfo.avatar || avatarPlaceholder"
          class="profile-picture"
          alt="Profile Picture"
        />
        <button type="button" class="btn upload-profile-btn">
          <span class="fa fa-plus"></span> Upload New
        </button>
      </div>
    </div>
    <!--Job invitation main closing tag-->

    <div class="PC-grid2-div2">
      <form action="">
        <div class="form-group col-sm-6">
          <label for="name">NAME</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            v-model="personalInfo.name"
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="gender">GENDER</label>
          <multiselect
            id="gender"
            name="gender"
            placeholder="Select your gender"
            v-model="personalInfo.gender"
            :options="genderOptions"
          >
          </multiselect>
        </div>
        <div class="form-group col-sm-6">
          <label for="dob">DATE OF BIRTH</label>
          <input
            type="date"
            class="form-control"
            id="dob"
            placeholder="Select date of birth"
            name="dob"
            v-model="personalInfo.dob"
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="country">NATIONALITY</label>
          <multiselect
            id="country"
            name="country"
            placeholder="Enter your nationality"
            v-model="personalInfo.country"
            :options="countryOptions"
          >
          </multiselect>
        </div>
        <div class="form-group col-sm-12">
          <label for="pwd">CURRENT LOCATION</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Current Location (Full Address)"
            name="address"
            v-model="personalInfo.address"
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="phone1">MOBILE PHONE NUMBER</label>
          <input
            type="tel"
            class="form-control"
            id="phone1"
            placeholder="Enter your mobile number"
            name="phone1"
            v-model="personalInfo.phone1"
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="phone">FIXED LINE</label>
          <input
            type="tel"
            class="form-control"
            id="phone2"
            placeholder="Enter your fixed line number"
            name="phone2"
            v-model="personalInfo.phone2"
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="yearOfWorkExperience"
            >TOTAL YEARS OF WORK EXPERIENCE</label
          >
          <multiselect
            id="yearsOfWorkExperience"
            name="yearsOfWorkExperience"
            placeholder="Select total experience"
            v-model="personalInfo.yearsOfWorkExperience"
            :options="yearsOfWorkExperienceOptions"
          >
          </multiselect>
        </div>
        <div class="form-group col-sm-6">
          <label for="countryOfWorkExperience"
            >COUNTRIES OF WORK EXPERIENCE</label
          >
          <multiselect
            id="countryOfWorkExperience"
            name="countryOfWorkExperience"
            placeholder="Select number of countries"
            v-model="personalInfo.countryOfWorkExperience"
            :options="countryOfWorkExperienceOptions"
          >
          </multiselect>
        </div>
        <div class="form-group col-sm-12">
          <label for="handsOnTechnology">HANDS ON TECHNOLOGY</label>
          <multiselect
            id="handsOnTechnology"
            name="handsOnTechnology"
            :multiple="true"
            :searchable="true"
            :close-on-select="false"
            placeholder="Select hands on technology"
            v-model="personalInfo.handsOnTechnology"
            :options="handsOnTechnologyOptions"
          >
            <template slot="selection" slot-scope="{ values, search, isOpen }"
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
              v-for="(
                handsOnTechnologyValue, i
              ) in personalInfo.handsOnTechnology"
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
          <label for="utmMedium"
            >WHERE DID YOU HEAR ABOUT THIS PLATFORM FROM</label
          >
          <multiselect
            id="utmMedium"
            name="utmMedium"
            v-model="personalInfo.utmMedium"
            :options="utmMediumOptions"
          >
          </multiselect>
        </div>
        <div class="form-group col-sm-12">
          <label for="referee">NAME OF THE PROFESSIONAL</label>
          <input
            type="text"
            class="form-control"
            id="referee"
            placeholder="Enter Referee name"
            name="referee"
            v-model="personalInfo.referee"
          />
        </div>
        <template v-for="(language, i) in personalInfo.languages">
          <div class="form-group col-sm-12" :key="i + 'language'">
            <label for="language">SELECT LANGUAGE</label>
            <multiselect
              :id="`language_${i}`"
              :name="`language_${i}`"
              placeholder="Select your language"
              v-model="personalInfo.languages[i].language"
              :options="languageOptions"
            >
            </multiselect>
          </div>
          <div class="form-group col-sm-12" :key="i + 'proficiency'">
            <div class="checkbox-inline">
              <label
                ><input
                  class="product-category-input"
                  type="radio"
                  :value="'Elementary'"
                  v-model="personalInfo.languages[i].proficiency"
                />
                Elementary</label
              >
            </div>
            <div class="checkbox-inline">
              <label
                ><input
                  type="radio"
                  :value="'Professional'"
                  v-model="personalInfo.languages[i].proficiency"
                />
                Professional</label
              >
            </div>
            <div class="checkbox-inline">
              <label
                ><input
                  type="radio"
                  :value="'Native'"
                  v-model="personalInfo.languages[i].proficiency"
                />
                Native</label
              >
            </div>
          </div>
        </template>
      </form>
      <button
        type="button"
        class="btn btn-block white-background red-border red-font"
        @click="addPersonalInfoLanguage"
      >
        <span class="fa fa-plus"></span> ADD ANOTHER LANGUAGE
      </button>
      <br />
      <p>Save the above information to continue to next step.</p>
      <button type="submit" class="btn btn-lg red-background">
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts">
import Multiselect from "vue-multiselect";
import avatar from "@/assets/avatar.png";
export default {
  data() {
    return {
      avatarPlaceholder: avatar,
      handsOnTechnologyOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
      ],
      genderOptions: ["male", "female"],
      countryOptions: ["nigeria", "uae"],
      yearsOfWorkExperienceOptions: ["2", "3", "4", "5"],
      countryOfWorkExperienceOptions: ["2", "3", "4", "5"],
      languageOptions: ["English", "Vernacular"],
      utmMediumOptions: [
        "Reference",
        "LinkedIn",
        "Google",
        "Promotional Email",
        "Invitation",
      ],
      personalInfo: {
        name: "",
        avatar: "" as undefined | string | Blob | File,
        gender: "",
        dob: "",
        country: "",
        handsOnTechnology: [],
        address: "",
        phone1: "",
        phone2: "",
        yearsOfWorkExperience: "",
        countryOfWorkExperience: "",
        utmMediumOption: "",
        referee: "",
        languages: [
          {
            language: "",
            proficiency: "",
          },
        ],
      },
    };
  },
  components: { Multiselect },
  methods: {
    removeHandsOnTechnologyValue(index: number): void {
      this.personalInfo.handsOnTechnology.splice(index, 1);
    },
    addPersonalInfoLanguage(): void {
      this.personalInfo.languages.push({
        language: "",
        proficiency: "",
      });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
