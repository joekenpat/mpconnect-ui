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
    <div class="margin-10 row red-bottom-border">
      <div class="PC-grid2-div margin-10 bold-font col-sm-12">
        <p class="work-exp gray-background">
          <span class="badge">2</span>
          Project References
        </p>
      </div>
      <!--Job invitation main closing tag-->

      <div class="PC-grid2-div2">
        <form action="/action_page.php">
          <div class="form-group col-sm-6">
            <label for="email">CLIENT NAME</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your employer name" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="pwd">INDUSTRY</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter your job title" name="pwd">
          </div>
          <div class="form-group col-sm-12">
            <label for="comment">DESCRIPTION</label>
            <textarea class="form-control" rows="10" id="comment" placeholder="Enter description here"></textarea>
          </div>
          <div class="form-group col-sm-12">
            <label for="pwd">FUNCTIONAL SKILLS</label>
            <input type="password" class="form-control" id="pwd" placeholder="Adobe Illustrator" name="pwd">
          </div>
          <div class="hands-on-technology col-sm-12">
            <ul class="technology-list list-inline">
              <li>Adobe illustrator<button type="button" class="button x-btn"><span
                    class="fa fa-times-circle"></span></button></li>
              <li>Sketch<button type="button" class="button x-btn"><span class="fa fa-times-circle"></span></button>
              </li>
              <li>PHP Development<button type="button" class="button x-btn"><span
                    class="fa fa-times-circle"></span></button></li>
              <li>WordPress<button type="button" class="button x-btn"><span class="fa fa-times-circle"></span></button>
              </li>
            </ul>
          </div>
          <div class="form-group col-sm-12">
            <label for="upload">UPLOAD PROJECT DOCUMENT</label>
            <button type="button" class="btn btn-block upload-project-document"><span class="fa fa-cloud-upload"></span>
              Upload your files</button>
          </div>

        </form>
        <!-- <p>Save the above information to continue to next step.</p> -->
      </div>
    </div>

    <div class="margin-10 row">
      <div class="PC-grid2-div1">
        <p class="work-exp gray-background col-sm-12">
          <span class="badge">1</span>
          Project References
        </p>
      </div>
      <!--Job invitation main closing tag-->

      <div class="PC-grid2-div2 margin-10">
        <form action="/action_page.php">
          <div class="form-group col-sm-6">
            <label for="email">CLIENT NAME</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your employer name" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="pwd">INDUSTRY</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter your job title" name="pwd">
          </div>
          <div class="form-group col-sm-12">
            <label for="comment">DESCRIPTION</label>
            <textarea class="form-control" rows="10" id="comment" placeholder="Enter description here"></textarea>
          </div>
          <div class="form-group col-sm-12">
            <label for="pwd">FUNCTIONAL SKILLS</label>
            <input type="password" class="form-control" id="pwd" placeholder="Adobe Illustrator" name="pwd">
          </div>
          <div class="hands-on-technology col-sm-12">
            <ul class="technology-list list-inline">
              <li>Adobe illustrator<button type="button" class="button x-btn"><span
                    class="fa fa-times-circle"></span></button></li>
              <li>Sketch<button type="button" class="button x-btn"><span class="fa fa-times-circle"></span></button>
              </li>
              <li>PHP Development<button type="button" class="button x-btn"><span
                    class="fa fa-times-circle"></span></button></li>
              <li>WordPress<button type="button" class="button x-btn"><span class="fa fa-times-circle"></span></button>
              </li>
            </ul>
          </div>
          <div class="form-group col-sm-12">
            <label for="upload">UPLOAD PROJECT DOCUMENT</label>
            <button type="button" class="btn btn-block upload-project-document"><span class="fa fa-cloud-upload"></span>
              Upload your files</button>
          </div>

        </form>
        <button type="button" class="btn btn-block white-background red-border red-font bold-font"> ADD PROJECT</button>
        <br />
        <p class="lightgray-font">Save the above information to continue to next step.</p>
        <button type="submit" class="btn btn-lg red-background">SAVE & CONTINUE</button>
      </div>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
