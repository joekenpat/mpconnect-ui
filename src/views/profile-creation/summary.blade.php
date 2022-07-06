<script lang="ts">
  export default {
    data() {
      return {};
    },
    components: {},
  };
</script>
<template>
  <div class="PS-grid2">
    <div class="profile-completion-container white-background vertical-margin-10">
      <p class="bold-font side-margin-10 pad-10">Profile Completion</p>
      <div class="profile-completion">
        <img src="images/rgw.jpg" alt="profile-completion-status" class="profile-completion-image">
        <div>
          <h2>20%</h2>
          <p>Profile setup pending</p>
          <a href="#" class="red-font setup-profile-link bold-font vertical-margin-10">SETUP PROFILE</a>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-block red-background white-font font-600">SUBMIT PROFILE</button>
  </div>
  <!--PC-grid2 closing tag-->
</template>
