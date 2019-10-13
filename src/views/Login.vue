<template>
  <div class="about">
    <h2>Login</h2>
    <el-form ref="form" v-model="form" label-width="80px" @submit.prevent="login()">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">Log In</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data: () => {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('userLogin',{
        email: this.form.email, 
        password: this.form.password
      })
      this.$router.push({ name: 'contacts'});
    }
  }
}
</script>
