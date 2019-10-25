<template>
  <div class="about">
    <h2>Register</h2>
    <el-form ref="form" v-model="form" label-width="80px" @submit.prevent="register()">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="FirstName">
        <el-input type="firstName" v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item label="LastName">
        <el-input type="lastName" v-model="form.lastName"></el-input>
      </el-form-item>
      <el-form-item label="StudentID">
        <el-input type="studentID" v-model="form.studentID"></el-input>
        <input type="file" @change="onFileChanged">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import fs from 'fs';

export default {
  data: () => {
    return {
      form: {
        email: "",
        password: ""
      },
      uploadfile: null
    }
  },
  methods: {
    register () {
      this.$store.dispatch('userRegister',{
        user_id: this.form.studentID,
        password: this.form.password,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        id_photo: this.file,
        validated: false
      });

      this.$router.push({ name: 'pending'});
    },
    onFileChanged (event) {
      const file = event.target.files[0]
      this.uploadfile = file;
    },
    base64_encode() {
      var bitmap = fs.readFileSync(this.file);
      return new Buffer(bitmap).toString('base64');
    }
  }
}
</script>

<style>
@import '../assets/styles/register.css';
</style>
