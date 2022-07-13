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
<script lang="ts" src="./ShortBio.ts"></script>
