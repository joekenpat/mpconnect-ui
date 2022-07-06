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
          <label for="pwd">TOPICS OF INTEREST</label>
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
          <label>WHERE WOULD YOU LIKE TO CONTRIBUTE</label>
          <div class="checkbox">
            <label
              ><input class="product-category-input" type="checkbox" value="" />
              Working on Projects</label
            >
          </div>
          <p class="lightgray-font">
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain
          </p>
          <div class="checkbox">
            <label><input type="checkbox" value="" /> Develop Proposals</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox" value="" /> Develop Clients</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox" value="" /> Extend Network</label>
          </div>
          <div class="checkbox">
            <label><input type="checkbox" value="" /> Build Communities</label>
          </div>
        </div>
      </form>

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
