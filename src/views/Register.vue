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
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register()">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'register',
  data: () => {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('userRegister',{
        email: this.form.email, 
        password: this.form.password
      })
      this.$router.push({ name: 'contacts'});
    }
  }
}
</script>
