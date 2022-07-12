<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div2 step2-grid2 margin-10">
      <form action="/action_page.php">
        <div class="form-group col-sm-12">
          <label for="comment">SHORT BIO</label>
          <textarea
            class="form-control"
            rows="10"
            id="bio"
            name="bio"
            placeholder="Describe the curriculum vitae"
            v-model="userBio.short_bio"
            minlength="100"
          ></textarea>
        </div>
        <template v-for="(msg, fe) in formErrors.short_bio">
          <span class="red-font" :key="fe"> {{ msg }} </span>
        </template>
        <p class="text-right lightgray-font">Min. 100 words allowed</p>
      </form>
      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <button @click="updateShortBio" class="btn btn-lg red-background">
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts">
import Multiselect from "vue-multiselect";
import { $http } from "@/services/http-common";
import { UserShortBioDTO } from "@/services/UserDTO";
import { jsonToFormData } from "@/services/JsonToFormData";
export default {
  data() {
    return {
      userBio: {
        short_bio: "",
      } as UserShortBioDTO,
      formErrors: {
        short_bio: [] as string[],
      },
    };
  },
  components: { Multiselect },
  created() {
    this.fetchUserDetail();
  },
  methods: {
    fetchUserDetail(): void {
      $http
        .get("/profile")
        .then(({ data }) => {
          console.log(new UserShortBioDTO(data.user));
          this.userBio = new UserShortBioDTO(data.user);
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
    updateShortBio(): void {
      $http
        .post("/profile/update/short-bio", jsonToFormData(this.userBio))
        .then(({ data }) => {
          this.$toast.open({
            type: "success",
            message: data.message,
            duration: 5000,
          });
          this.$router.push({ name: "profile-creation-work-history" });
        })
        .catch((error) => {
          console.error({ error });
          if (error.request.status === 422) {
            this.formErrors = error.response.data.errors;
          }
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
