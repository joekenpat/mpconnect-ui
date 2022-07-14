<template>
  <main class="login-main">
    <div class="login-container">
      <section class="login-logo-section">
        <img :src="avatar" alt="MP Logo" class="login-logo" />
      </section>
      <section class="login-form-section">
        <div class="login-form-container">
          <ul class="log-sign">
            <li class="log-link-active">Login</li>
          </ul>
          <form class="login-form" @submit.prevent="signIn">
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
            <button
              :disabled="!canSubmit"
              @click="signIn"
              type="button"
              class="login-btn"
            >
              LOGIN
            </button>
            <div class="login-options">
              <div>
                <label>
                  <input
                    type="checkbox"
                    placeholder="Remember me"
                    value="Remember me"
                  />
                  Remember me</label
                >
              </div>
              <button>Forgot Password?</button>
            </div>
          </form>
          <div class="center-align">
            <button class="login-LI">
              <span class="fa fa-linkedin-square"></span> Login with LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script lang="ts" src="./SignIn.ts"></script>
