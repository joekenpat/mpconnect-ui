<template>
  <main class="login-main">
    <div class="login-container">
      <section class="login-logo-section">
        <img :src="avatar" alt="MP Logo" class="login-logo" />
      </section>
      <section class="login-form-section">
        <div class="login-form-container">
          <ul class="log-sign">
            <li>
              <router-link to="/auth/sign-in" active-class="log-link-active"
                >Login</router-link
              >
            </li>
            <li>
              <router-link to="/auth/sign-up" active-class="log-link-active"
                >Sign up</router-link
              >
            </li>
          </ul>
          <form class="login-form">
            <div class="login-form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" v-model="auth.email" />
              <template v-for="(msg, fe) in formErrors['email']">
                <span class="red-font" :key="fe"> {{ msg }} </span>
              </template>
            </div>
            <div class="login-form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                v-model="auth.password"
              />
              <template v-for="(msg, fe) in formErrors['password']">
                <span class="red-font" :key="fe"> {{ msg }} </span>
              </template>
            </div>
            <div class="login-form-group">
              <label>Retype Password</label>
              <input
                type="password"
                placeholder="Password"
                v-model="re_password"
              />
            </div>
            <button
              :disabled="!canSubmit"
              @click="signUp"
              type="button"
              class="login-btn"
            >
              SIGN UP
            </button>
            <div class="login-options">
              <div>
                <input
                  type="checkbox"
                  placeholder="Remember me"
                  value="Remember me"
                />
                <label>Remember me</label>
              </div>
              <button>Forgot Password?</button>
            </div>
          </form>
          <div class="center-align">
            <button class="login-LI">
              <span class="fa fa-linkedin-square"></span> Signup with LinkedIn
            </button>
            <p>
              By clicking sign up, you agree to
              <em class="red-font">terms & conditions</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script lang="ts" src="./SignUp.ts"></script>
