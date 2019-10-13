<template>
  <div>
    <h2>Profile</h2>
    <p>
      <el-button @click="$router.push('/profile/edit')">Edit Profile</el-button>
    </p>
    <contact-info></contact-info>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'profile',
  components: {
    ContactInfo
  }
}
</script>
