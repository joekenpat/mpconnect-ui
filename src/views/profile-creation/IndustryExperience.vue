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
        <div class="form-group col-sm-12">
          <div class="row">
            <label for="pwd" class="text-left col-sm-6"
              >INDUSTRY EXPERIENCE</label
            >
            <p class="text-right red-font col-sm-6">
              Select a minimum of 10 industry experience
            </p>
          </div>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Adobe Illustrator"
            name="pwd"
          />
        </div>
        <div class="hands-on-technology col-sm-12">
          <ul class="technology-list list-inline">
            <li>
              Adobe illustrator<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
            <li>
              Sketch<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
            <li>
              PHP Development<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
            <li>
              WordPress<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
          </ul>
        </div>
        <div class="form-group col-sm-12">
          <div class="row">
            <label for="pwd" class="text-left col-sm-6"
              >FUNCTIONAL SKILLS</label
            >
            <p class="text-right red-font col-sm-6">
              Select a minimum of 5 functional skills
            </p>
          </div>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Adobe Illustrator"
            name="pwd"
          />
        </div>
        <div class="hands-on-technology col-sm-12">
          <ul class="technology-list list-inline">
            <li>
              Adobe illustrator<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
            <li>
              Sketch<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
            <li>
              PHP Development<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
            <li>
              WordPress<button type="button" class="button x-btn">
                <span class="fa fa-times-circle"></span>
              </button>
            </li>
          </ul>
        </div>
      </form>

      <br />
      <p class="lightgray-font">
        Save the above information to continue to next step.
      </p>
      <button type="submit" class="btn btn-lg red-background">
        SAVE & CONTINUE
      </button>
    </div>
  </div>
  <!--PC-grid2 closing tag-->
</template>
