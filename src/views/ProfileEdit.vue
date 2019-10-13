<template>
  <div class="about">
    <h2>Edit Profile</h2>
    <el-form ref="form" v-model="profile" label-width="110px" @submit.prevent="update()">
      <el-form-item label="Full name">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="Email Address">
        <el-input v-model="profile.email"></el-input>
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="profile.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="update()">Update Profile</el-button>
      </el-form-item>
    </el-form>

    <h2>Change Password</h2>
    <el-form ref="form" v-model="password" label-width="160px" @submit.prevent="changePassword()">
      <el-form-item label="Old Password">
        <el-input type="password" v-model="password.old"></el-input>
      </el-form-item>
      <el-form-item label="New Password">
        <el-input type="password" v-model="password.new"></el-input>
      </el-form-item>
      <el-form-item label="Retype New Password">
        <el-input type="password" v-model="password.retype"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="changePassword()">Update Password</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'ProfileEdit',
  data: () => {
    return {
      profile: {
        name: '',
        email: '',
        phone: ''
      },
      password: {
        old: '',
        new: '',
        retype: ''
      }
    }
  },
  methods: {
    changePassword () {

    },
    update () {
      
    }
  }
}
</script>
