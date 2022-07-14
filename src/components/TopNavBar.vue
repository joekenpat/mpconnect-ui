<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#MP-nav"
        >
          <span class="fa fa-bars"></span>
        </button>
        <a class="navbar-brand" href="/">MP-Connect</a>
      </div>
      <div class="collapse navbar-collapse" id="MP-nav">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle nav-icons"
              id="notification-link"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              ><span class="fa fa-bell-o"></span
            ></a>
            <ul
              class="dropdown-menu nav-dropdown-content"
              id="notification-dropdown"
            >
              <!-- <li><a href="#">Sample</a></li> -->
              <li>
                <div class="notification-div">
                  <p>
                    New job
                    <b>Lookout Web Developer for full time position</b> posted
                    on the platform
                  </p>
                  <div class="notification-details">
                    <a class="lightgray-font text-left">View & Apply Job</a>
                    <small class="lightgray-font text-right">23m</small>
                  </div>
                </div>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <div class="notification-div">
                  <p>
                    Your job
                    <b>Lookout Web Developer for full time position</b> status
                    change to
                    <strong class="lightblue-font">Shortlisted</strong>
                  </p>
                  <div class="notification-details">
                    <a class="lightgray-font text-left">View details</a>
                    <small class="lightgray-font text-right">1h</small>
                  </div>
                </div>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <div class="notification-div">
                  <p>You receive <b>Job Invitation</b> to apply.</p>
                  <div class="notification-details">
                    <a class="lightgray-font text-left"
                      >View & Accept Invitation</a
                    >
                    <small class="lightgray-font text-right">3h</small>
                  </div>
                </div>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <div class="notification-div">
                  <p>Patrick Rodriquez, Sent you a message.</p>
                  <div class="notification-details">
                    <a class="lightgray-font text-left">View Message</a>
                    <small class="lightgray-font text-right">1w</small>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a
              class="dropdown-toggle"
              id="profile-avatar-link"
              data-toggle="dropdown"
              href="#"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img v-if="user" class="avatar-image" :src="user?.img_url" />
              {{ user?.first_name }} <span class="fa fa-caret-down"></span>
            </a>
            <ul class="dropdown-menu nav-dropdown-content">
              <li><a href="#">About Us</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">FAQ's</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Help & Support</a></li>
              <li role="separator" class="divider"></li>
              <li><router-link to="/auth/sign-out">Logout</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  props: {
    menuLinks: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      dropDownMenuLinks: [
        {
          route: "/",
          text: "home",
        },
      ],
      user: null,
    };
  },
};
</script>
<style scoped></style>
