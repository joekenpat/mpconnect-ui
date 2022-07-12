<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div1">
      <p>UPLOAD YOUR PROFILE PICTURE</p>
      <div>
        <img
          :src="
            personalInformation.personal_information?.profile_image ||
            avatarPlaceholder
          "
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
            v-model="fullName"
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="gender">GENDER</label>
          <multiselect
            id="gender"
            name="gender"
            placeholder="Select your gender"
            v-model="personalInformation.gender"
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
            v-model="personalInformation.date_of_birth"
          />
        </div>
        <div class="form-group col-sm-6">
          <label for="country">NATIONALITY</label>
          <multiselect
            id="country"
            name="country"
            placeholder="Enter your nationality"
            v-model="personalInformation.nationality"
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
            v-model="personalInformation.current_address"
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
            v-model="personalInformation.mobile_phone"
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
            v-model="personalInformation.fixed_phone"
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
            v-model="personalInformation.years_of_work_experience"
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
            v-model="personalInformation.countries_of_work_experience"
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
            v-model="personalInformation.hands_on_technology"
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
              ) in personalInformation.hands_on_technology"
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
            v-model="personalInformation.platform_from"
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
            v-model="personalInformation.name_of_professional"
          />
        </div>
        <template v-for="(language, i) in personalInformation.languages">
          <div class="form-group col-sm-12" :key="i + 'language'">
            <label for="language">SELECT LANGUAGE</label>
            <multiselect
              :id="`language_${i}`"
              :name="`language_${i}`"
              placeholder="Select your language"
              v-model="personalInformation.languages[i].name"
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
                  :value="'elementary'"
                  v-model="personalInformation.languages[i].fluency"
                />
                Elementary</label
              >
            </div>
            <div class="checkbox-inline">
              <label
                ><input
                  type="radio"
                  :value="'professional'"
                  v-model="personalInformation.languages[i].fluency"
                />
                Professional</label
              >
            </div>
            <div class="checkbox-inline">
              <label
                ><input
                  type="radio"
                  :value="'native'"
                  v-model="personalInformation.languages[i].fluency"
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
        @click="addUserPersonalInformationLanguage"
      >
        <span class="fa fa-plus"></span> ADD
        {{ personalInformation.languages?.length > 0 ? "ANOTHER" : "" }}
        LANGUAGE
      </button>
      <br />
      <p>Save the above information to continue to next step.</p>
      <button
        @click="updateUserPersonalInformation"
        class="btn btn-lg red-background"
      >
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts">
import Multiselect from "vue-multiselect";
import avatar from "@/assets/avatar.png";
import { $http } from "@/services/http-common";
import { UserPersonalInfoDTO } from "@/services/UserDTO";
import { jsonToFormData } from "@/services/JsonToFormData";
export default {
  data() {
    return {
      avatarPlaceholder: avatar,
      fullName: "",
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
      personalInformation: {
        languages: [
          {
            name: "",
            fluency: "",
          },
        ],
      } as UserDTO,
    };
  },
  watch: {
    fullName: {
      handler(val) {
        const [firstName, ...rest] = val.split(" ");
        this.personalInformation.first_name = firstName;
        this.personalInformation.last_name = rest.join(" ");
      },
    },
  },
  components: { Multiselect },
  created() {
    this.fetchUserDetail();
  },
  methods: {
    removeHandsOnTechnologyValue(index: number): void {
      this.personalInformation.hands_on_technology.splice(index, 1);
    },
    addUserPersonalInformationLanguage(): void {
      this.personalInformation.languages.push({
        name: "",
        fluency: "",
      });
    },
    fetchUserDetail(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          console.log(new UserPersonalInfoDTO(data.user));
          this.personalInformation = new UserPersonalInfoDTO(data.user);
          this.fullName = [
            this.personalInformation.first_name,
            this.personalInformation.last_name,
          ].join(" ");
        })
        .catch((error) => {
          console.error({ error });
          this.$toast.open({
            type: "error",
            message: error.response.data.message,
            duration: 5000,
          });
        });
    },
    updateUserPersonalInformation(): void {
      $http
        .post(
          "/profile/update/personal-information",
          jsonToFormData(this.personalInformation)
        )
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({ name: "profile-creation-short-bio" });
        })
        .catch((error) => {
          console.error({ error });
          this.$toast.open({
            type: "error",
            message: error.response.data.message,
            duration: 5000,
          });
        });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
