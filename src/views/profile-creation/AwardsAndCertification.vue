<template>
  <div class="PC-grid2">
    <div class="row margin-10">
      <form>
        <template v-for="(awardAndCert, ac) in awardsAndCertifications">
          <p :key="ac + 'title'" class="work-exp gray-background col-sm-12">
            <span class="badge">{{ ac + 1 }}</span>
            Project References
          </p>
          <!--Job invitation main closing tag-->
          <div :key="ac + 'form-items'" class="PC-grid2-div2 margin-10">
            <div class="form-group col-sm-12">
              <label :for="`title_${ac}`">AWARDS/CERTIFICATION TITLE</label>
              <input
                type="text"
                class="form-control"
                :id="`title_${ac}`"
                placeholder="Enter your industry"
                :name="`title_${ac}`"
                v-model="awardsAndCertifications[ac].title"
              />
            </div>
            <div class="form-group col-sm-12">
              <label :for="`description_${ac}`">DESCRIPTION</label>
              <textarea
                class="form-control"
                rows="10"
                :id="`description_${ac}`"
                :name="`description_${ac}`"
                placeholder="Enter description here"
                v-model="awardsAndCertifications[ac].description"
              ></textarea>
            </div>
            <div class="form-group col-sm-12">
              <label :for="`proof_file${ac}`">ATTACH FILES FOR PROOF</label>
              <input
                v-show="false"
                type="file"
                :id="`proof_file${ac}`"
                :name="`proof_file${ac}`"
                @change="getUploadedDocument(ac)"
              />
              <button
                type="button"
                :id="`document_selector_${ac}`"
                :name="`document_selector_${ac}`"
                @click="handleDocumentSelect(ac)"
                class="btn btn-block upload-project-document"
              >
                <span class="fa fa-cloud-upload"></span>
                {{ uploadedFileName(ac) }}
              </button>
            </div>
          </div>
        </template>
      </form>
      <button
        type="button"
        class="btn btn-block white-background red-border red-font bold-font"
        @click="addNewAwardAndCertification"
      >
        <span class="fa fa-plus"></span> ADD AWARDS/CERTIFICATION
      </button>
      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
        <button
          @click="updateUserCertifications"
          class="btn btn-lg red-background"
        >
          SAVE & CONTINUE
        </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./AwardsAndCertification.ts"></script>
