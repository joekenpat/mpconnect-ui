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
    <div class="PC-grid2-div2 row margin-10 red-bottom-border">
      <form action="/action_page.php">
        <div class="form-group col-sm-12">
          <label for="pwd">AWARDS/CERTIFICATION TITLE</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter your industry"
            name="pwd"
          />
        </div>
        <div class="form-group col-sm-12">
          <label for="comment">DESCRIPTION</label>
          <textarea
            class="form-control"
            rows="10"
            id="comment"
            placeholder="Enter description here"
          ></textarea>
        </div>
        <div class="form-group col-sm-12">
          <label for="upload">ATTACH FILES FOR PROOF</label>
          <button type="button" class="btn btn-block upload-project-document">
            <span class="fa fa-cloud-upload"></span> Upload your files
          </button>
        </div>
      </form>
    </div>
    <div class="PC-grid2-div2 row margin-10">
      <div class="PC-grid2-div">
        <p class="work-exp gray-background">
          <span class="badge">2</span>
          Project References
        </p>
      </div>
      <!--Job invitation main closing tag-->

      <form action="/action_page.php">
        <div class="form-group col-sm-12">
          <label for="pwd">AWARDS/CERTIFICATION TITLE</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter your industry"
            name="pwd"
          />
        </div>
        <div class="form-group col-sm-12">
          <label for="comment">DESCRIPTION</label>
          <textarea
            class="form-control"
            rows="10"
            id="comment"
            placeholder="Enter description here"
          ></textarea>
        </div>
        <div class="form-group col-sm-12">
          <label for="upload">ATTACH FILES FOR PROOF</label>
          <button type="button" class="btn btn-block upload-project-document">
            <span class="fa fa-cloud-upload"></span> Upload your files
          </button>
        </div>
      </form>
      <button
        type="button"
        class="btn btn-block white-background red-border red-font bold-font"
      >
        <span class="fa fa-plus"></span> ADD AWARDS/CERTIFICATION
      </button>
      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <button type="submit" class="btn btn-lg red-background">
        SUBMIT PROFILE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
