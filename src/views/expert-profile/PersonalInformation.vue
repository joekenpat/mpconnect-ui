<template>
  <div class="PC-grid2">
    <div class="PC-grid2-div2 step2-grid2 margin-10">
      <form class="row">
        <div class="form-group col-sm-12">
          <label for="email">PROFILE NAME</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your profile name"
            name="name"
            v-model="personalInformation.name"
          />
          <template v-for="(msg, fe) in formErrors['name']">
            <span class="red-font" :key="fe"> {{ msg }} </span>
          </template>
        </div>
        <div class="form-group col-sm-12">
          <label for="comment">PROFILE DESCRIPTION</label>
          <textarea
            class="form-control"
            rows="10"
            id="description"
            name="description"
            v-model="personalInformation.description"
            placeholder="Enter a description for this expert profile"
          ></textarea>
          <template v-for="(msg, fe) in formErrors['description']">
            <span class="red-font" :key="fe"> {{ msg }} </span>
          </template>
        </div>
        <p class="col-sm-12 text-right lightgray-font">
          Min. 100 words allowed
        </p>
      </form>
      <br />
      <p>Save the above information to continue to next step.</p>
      <button
        @click="updateExpertPersonalInformation"
        class="btn btn-lg red-background"
      >
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./PersonalInformation.ts"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
