<template>
  <div class="PC-grid2">
    <div class="margin-10 row">
      <form>
        <template v-for="(projectReference, pr) in projectReferences">
          <p :key="pr + 'title'" class="work-exp gray-background col-sm-12">
            <span class="badge">{{ pr + 1 }}</span>
            Project References
          </p>
          <!--Job invitation main closing tag-->
          <div :key="pr + 'form-items'" class="PC-grid2-div2 margin-10">
            <div class="form-group col-sm-6">
              <label :for="`name_of_client_${pr}`">CLIENT NAME</label>
              <input
                type="text"
                class="form-control"
                :id="`name_of_client_${pr}`"
                placeholder="Enter your employer name"
                :name="`name_of_client_${pr}`"
                v-model="projectReferences[pr].name_of_client"
              />
            </div>
            <div class="form-group col-sm-6">
              <label :for="`industry_${pr}`">INDUSTRY</label>
              <input
                type="text"
                class="form-control"
                :id="`industry_${pr}`"
                placeholder="Enter your job title"
                :name="`industry_${pr}`"
                v-model="projectReferences[pr].industry"
              />
            </div>
            <div class="form-group col-sm-12">
              <label :for="`description_${pr}`">DESCRIPTION</label>
              <textarea
                class="form-control"
                rows="10"
                :id="`description_${pr}`"
                :name="`description_${pr}`"
                placeholder="Enter description here"
                v-model="projectReferences[pr].description"
              ></textarea>
            </div>
            <div class="form-group col-sm-12">
              <label :for="`functional_skills_${pr}`">FUNCTIONAL SKILLS</label>
              <multiselect
                :id="`functional_skills_${pr}`"
                :name="`functional_skills_${pr}`"
                :multiple="true"
                :searchable="true"
                :close-on-select="false"
                placeholder="Select functional skills"
                v-model="projectReferences[pr].functional_skills"
                :options="functionalSkillsOptions"
              >
                <template
                  slot="selection"
                  slot-scope="{ values, search, isOpen }"
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
                  v-for="(functionalSkillsValue, i) in projectReferences[pr]
                    .functional_skills"
                  :key="i"
                >
                  {{ functionalSkillsValue }}
                  <button
                    type="button"
                    class="button x-btn"
                    @click="removeFunctionalSkillValue(pr, i)"
                  >
                    <span class="fa fa-times-circle"></span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="form-group col-sm-12">
              <label :for="`document_file_${pr}`"
                >UPLOAD PROJECT DOCUMENT</label
              >
              <input
                v-show="false"
                type="file"
                :id="`document_file_${pr}`"
                :name="`document_file_${pr}`"
                @change="getUploadedDocument(pr)"
              />
              <button
                type="button"
                :id="`document_selector_${pr}`"
                :name="`document_selector_${pr}`"
                @click="handleDocumentSelect(pr)"
                class="btn btn-block upload-project-document"
              >
                <span class="fa fa-cloud-upload"></span>
                {{ uploadedFileName(pr) }}
              </button>
            </div>
          </div>
        </template>
      </form>
      <div class="PC-grid2-div2 margin-10">
        <button
          type="button"
          class="btn btn-block white-background red-border red-font bold-font"
          @click="addNewProjectReference"
        >
          ADD PROJECT
        </button>
        <br />
        <p class="lightgray-font">
          Save the above information to continue to next step.
        </p>
        <button
          @click="updateUserProjectReferences"
          class="btn btn-lg red-background"
        >
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts" src="./ProjectReference.ts"></script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
