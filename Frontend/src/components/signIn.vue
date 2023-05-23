<template>
   <h1 id="main-heading">Book Tracker</h1>
  <div id="signin">
    <h3 id="signin-heading">Sign in</h3>
    <form>
      <div class="signin-input">
        <label class="signin-label">Email</label>
        <input
          type="email"
          class="signin-inputfield"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="signin-input">
        <label class="signin-label">Password</label>
        <input
          type="password"
          class="signin-inputfield"
          id="password"
          v-model="password"
          required
        />
        <p id="forgot-password">Forgot Password?</p>
      </div>
      <p id="error-handling-text"></p>
      <p id="reset-email-success-text"></p>
      <button type="button" @click="signIn()" id="signin-btn">Sign In</button>
      <p id="signup-text">
        Don't have an account yet?
        <router-link to="/"><span id="signup-link">Sign up.</span></router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      let result = await axios.post("http://localhost:5000/user/login ", {
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 200) {
        // alert('Done !!');
        this.$router.push({ name: "showBooks" });
      }
      console.log("signing in **");
    },
  },
};
</script>

<style scoped>
@import "../assets/css/signIn.css";
</style>
