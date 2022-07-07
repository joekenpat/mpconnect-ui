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
              <label :for="`clientName_${pr}`">CLIENT NAME</label>
              <input
                type="text"
                class="form-control"
                :id="`clientName_${pr}`"
                placeholder="Enter your employer name"
                :name="`clientName_${pr}`"
                v-model="projectReferences[pr].clientName"
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
              <label :for="`functionalSkills_${pr}`">FUNCTIONAL SKILLS</label>
              <multiselect
                :id="`functionalSkills_${pr}`"
                :name="`functionalSkills_${pr}`"
                :multiple="true"
                :searchable="true"
                :close-on-select="false"
                placeholder="Select functional skills"
                v-model="projectReferences[pr].functionalSkills"
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
                    .functionalSkills"
                  :key="i"
                >
                  {{ functionalSkillsValue }}
                  <button
                    type="button"
                    class="button x-btn"
                    @click="removeFunctionalSkillValue(we, i)"
                  >
                    <span class="fa fa-times-circle"></span>
                  </button>
                </li>
              </ul>
            </div>
            <div class="form-group col-sm-12">
              <label :for="`documentFile_${pr}`">UPLOAD PROJECT DOCUMENT</label>
              <input
                v-show="false"
                type="file"
                :id="`documentFile_${pr}`"
                :name="`documentFile_${pr}`"
                @change="getUploadedDocument(pr)"
              />
              <button
                type="button"
                :id="`documentSelector_${pr}`"
                :name="`documentSelector_${pr}`"
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
        <router-link
          :to="{ name: 'profile-creation-industry-experience' }"
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
  </div>
  <!--PC-grid2 closing tag-->
</template>
<script lang="ts">
import Multiselect from "vue-multiselect";

export default {
  data() {
    return {
      functionalSkillsOptions: [
        "Adobe illustrator",
        "Sketch",
        "PHP Development",
        "WordPress",
      ],
      projectReferences: [
        {
          clientName: "",
          industry: "",
          description: "",
          functionalSkills: [],
          documentFile: undefined as undefined | File,
        },
      ],
    };
  },
  components: { Multiselect },
  methods: {
    removeFunctionalSkillValue(referenceIndex: number, index: number): void {
      this.projectReferences[referenceIndex].functionalSkills.splice(index, 1);
    },
    addNewProjectReference(): void {
      this.projectReferences.push({
        clientName: "",
        industry: "",
        description: "",
        functionalSkills: [],
        documentFile: undefined as undefined | File,
      });
    },
    getUploadedDocument(referenceIndex: number): void {
      const el = this.$el.querySelector(
        `#documentFile_${referenceIndex}`
      ) as HTMLInputElement;
      const selectedFile = el.files?.[0];

      this.projectReferences[referenceIndex].documentFile = selectedFile;
    },
    handleDocumentSelect(referenceIndex: number): void {
      const el = this.$el.querySelector(
        `#documentFile_${referenceIndex}`
      ) as HTMLInputElement;
      if (el) {
        el.click();
      }
    },
    uploadedFileName(referenceIndex: number): string {
      const fileSelected = this.projectReferences[referenceIndex].documentFile;
      return fileSelected ? fileSelected.name : "Upload your files";
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
