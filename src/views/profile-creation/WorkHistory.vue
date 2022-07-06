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
    <div class="margin-10 red-bottom-border row">
      <!-- <div class="PC-grid2-div1"> -->
      <p class="work-exp gray-background">
        <span class="badge">2</span>
        Work Experience
      </p>
      <!-- </div>Job invitation main closing tag -->

      <div class="PC-grid2-div2">
        <form action="/action_page.php">
          <div class="form-group col-sm-6">
            <label for="email">NAME OF EMPLOYER</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your employer name" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="pwd">JOB TITLE</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter your job title" name="pwd">
          </div>
          <div class="form-group col-sm-12">
            <label for="pwd">ENTER YOUR INDUSTRY</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter your industry" name="pwd">
          </div>
          <div class="form-group col-sm-12">
            <label for="pwd">HANDS ON TECHNOLOGY</label>
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
          <div class="form-group col-sm-6">
            <label for="dob">START DATE</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="dob">START YEAR</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-12">
            <div class="checkbox">
              <label><input class="product-category-input" type="checkbox" value=""> I am currently working in this
                role</label>
            </div>
          </div>
          <div class="form-group col-sm-6">
            <label for="dob">END DATE</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="dob">END YEAR</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-12">
            <label for="comment">DESCRIPTION</label>
            <textarea class="form-control" rows="10" id="comment" placeholder="Enter description here"></textarea>
          </div>
          <br />
        </form>
        <br />

        <!-- <button type="submit" class="btn btn-lg red-background">SAVE & CONTINUE</button> -->
      </div>
    </div>

    <div class="margin-10 row">
      <!-- <div class="PC-grid2-div1"> -->
      <p class="work-exp gray-background col-sm-12">
        <span class="badge">2</span>
        Work Experience
      </p>
      <!-- </div>Job invitation main closing tag -->

      <div class="PC-grid2-div2 margin-10">
        <form action="/action_page.php">
          <div class="form-group col-sm-6">
            <label for="email">NAME OF EMPLOYER</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your employer name" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="pwd">JOB TITLE</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter your job title" name="pwd">
          </div>
          <div class="form-group col-sm-12">
            <label for="pwd">ENTER YOUR INDUSTRY</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter your industry" name="pwd">
          </div>
          <div class="form-group col-sm-12">
            <label for="pwd">HANDS ON TECHNOLOGY</label>
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
          <div class="form-group col-sm-6">
            <label for="dob">START DATE</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="dob">START YEAR</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-12">
            <div class="checkbox">
              <label><input class="product-category-input" type="checkbox" value=""> I am currently working in this
                role</label>
            </div>
          </div>
          <div class="form-group col-sm-6">
            <label for="dob">END DATE</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-6">
            <label for="dob">END YEAR</label>
            <input type="date" class="form-control" id="email" placeholder="Select date of birth" name="email">
          </div>
          <div class="form-group col-sm-12">
            <label for="comment">DESCRIPTION</label>
            <textarea class="form-control" rows="10" id="comment" placeholder="Enter description here"></textarea>
          </div>
        </form>
        <button type="button" class="btn btn-block white-background red-border red-font"><span
            class="fa fa-plus"></span>
          ADD NEW WORK HISTORY</button>
        <br />
        <p class="lightgray-font">Save the above information to continue to next step.</p>
        <button type="submit" class="btn btn-lg red-background">SAVE & CONTINUE</button>
      </div>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
