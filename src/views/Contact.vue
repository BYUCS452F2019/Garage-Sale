<template>
  <div>
    <h2>Contact</h2>
    <contact-info></contact-info>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'contact',
  components: {
    ContactInfo
  }
}
</script>
