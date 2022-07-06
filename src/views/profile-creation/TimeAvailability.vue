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
    <div class="PC-grid2-div2 margin-10">
      <form action="/action_page.php">
        <h4 class="bold-font">Current Work Status</h4>
        <div class="work-status pad-10">
          <h3 class="font-600">
            <span class="fa fa-check-circle red-font"></span> Not Available
          </h3>
        </div>
        <div class="form-group col-sm-12">
          <label for="dob"
            ><small>WHEN WOULD YOU BECOME AVAILABLE NEXT?</small></label
          >
          <input
            type="date"
            class="form-control"
            id="email"
            placeholder="Select your available date"
            name="email"
          />
        </div>
        <div class="form-group col-sm-12">
          <h5 class="font-600">WORK STATUS</h5>
          <label class="checkbox-inline"
            ><input type="checkbox" value="" />Part Time</label
          >
          <label class="checkbox-inline"
            ><input type="checkbox" value="" />Full Time</label
          >
        </div>
        <div class="form-group col-sm-12">
          <h5 class="font-600">WORK TYPE</h5>
          <label class="checkbox-inline"
            ><input type="checkbox" value="" />Part Time</label
          >
          <label class="checkbox-inline"
            ><input type="checkbox" value="" />Full Time</label
          >
        </div>
        <div class="radio well-radio col-sm-12">
          <label><input type="radio" name="optradio" checked />Part Time</label>
        </div>
        <div class="radio well-radio col-sm-12">
          <label
            ><input type="radio" name="optradio" />Available Full Time
            Now</label
          >
        </div>

        <div class="form-group">
          <label for="sel1">LOCATIONS INTERESTED TO WORK IN</label>
          <select class="form-control" id="sel1" multiple>
            <option>United States of America (USA)</option>
            <option>Saudi Arabia</option>
            <option>Czech Republic</option>
            <option>Afghanistan</option>
            <option>New Zealand</option>
            <option>Canada</option>
          </select>
        </div>
      </form>
      <br />
      <div class="row pad-20">
        <p class="lightgray-font">
          Save the above information to continue to next step.
        </p>
        <button type="submit" class="btn btn-lg red-background">
          SAVE & CONTINUE
        </button>
      </div>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
