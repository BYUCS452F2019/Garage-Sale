<template>
  <div class="about">
    <h2>Login</h2>
    <b-form @submit.prevent="loginUser">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Password:" label-for="input-4">
        <b-form-input
          id="input-4"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button> OR <router-link to="/register">Register</router-link>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      submitted: false
    };
  },
  computed: {
    ...mapState("account", ["status"])
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    loginUser(e) {
      this.submitted = true;
      // const { email, password } = this.form;
      // if (email && password) {
      this.login({ email: this.form.email, password: this.form.password });
      // }
    }
  }
};
</script>