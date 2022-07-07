<script lang="ts">
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div2 step2-grid2 margin-10">
      <form action="/action_page.php">
        <div class="form-group col-sm-12">
          <label for="comment">SHORT BIO</label>
          <textarea
            class="form-control"
            rows="10"
            id="comment"
            placeholder="Describe the curriculum vitae"
          ></textarea>
        </div>
        <p class="text-right lightgray-font">Min. 100 words allowed</p>
      </form>
      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <router-link
        :to="{ name: 'profile-creation-work-history' }"
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
