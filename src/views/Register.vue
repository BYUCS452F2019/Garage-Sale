<template>
  <div>
    <b-form @submit.prevent="registerUser">
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

      <b-form-group id="input-group-1" label="First Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.firstName" required placeholder="Enter first name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.lastName" required placeholder="Enter last name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Student ID:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.userId"
          required
          placeholder="Enter BYU student ID"
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

      <b-button type="submit" variant="info">Submit</b-button> OR <router-link to="/login">Login</router-link>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        userId: "",
        password: "",
        firstName: "",
        lastName: "",
        password: ""
      },
      show: true,
      file: "test. will be replaced."
    };
  },
  methods: {
    ...mapActions("account", ["register"]),
    registerUser() {
      this.register({
        ...this.form,
        id_photo: this.file,
        validated: false
      });

      this.$router.push('/login');
    },
    onFileChanged(event) {
      const file = event.target.files[0];
      this.uploadfile = file;
    },
    base64_encode() {
      // var bitmap = fs.readFileSync(this.file);
      // return new Buffer(bitmap).toString('base64');
      return "";
    }
  }
};
</script>