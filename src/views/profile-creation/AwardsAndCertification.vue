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
              <label :for="`documentFile_${ac}`">ATTACH FILES FOR PROOF</label>
              <input
                v-show="false"
                type="file"
                :id="`documentFile_${ac}`"
                :name="`documentFile_${ac}`"
                @change="getUploadedDocument(ac)"
              />
              <button
                type="button"
                :id="`documentSelector_${ac}`"
                :name="`documentSelector_${ac}`"
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
      <router-link
        :to="{ name: 'profile-creation-interest-and-contribution' }"
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
<script lang="ts">
export default {
  data() {
    return {
      awardsAndCertifications: [
        {
          title: "",
          description: "",
          documentFile: undefined as undefined | File,
        },
      ],
    };
  },
  methods: {
    addNewAwardAndCertification(): void {
      this.awardsAndCertifications.push({
        title: "",
        description: "",
        documentFile: undefined as undefined | File,
      });
    },
    getUploadedDocument(referenceIndex: number): void {
      const el = this.$el.querySelector(
        `#documentFile_${referenceIndex}`
      ) as HTMLInputElement;
      const selectedFile = el.files?.[0];

      this.awardsAndCertifications[referenceIndex].documentFile = selectedFile;
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
      const fileSelected =
        this.awardsAndCertifications[referenceIndex].documentFile;
      return fileSelected ? fileSelected.name : "Upload your files";
    },
  },
};
</script>
