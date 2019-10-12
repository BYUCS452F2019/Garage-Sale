<template>
  <div>
    <h2>Contacts</h2>
    <div class="add"><el-button type="primary">Add a Contact</el-button></div>
    <div class="contact" v-for="contact in contacts" :key="contact.email" @click="$router.push('/contacts/1234')">
      <div>{{contact.name}}</div>
      <div>{{contact.email}}</div>
      <div>{{contact.phone}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  name: 'contacts',
  components: {
    ContactInfo
  },
  computed: {
    contacts () {
      return this.$store.state.contacts
    }
  }
}
</script>

<style scoped lang="stylus">
.add {
  margin-bottom: 10px;
}
.contact {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0 -10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ecf5ff;
  }

  > * {
    flex: 1
    margin-right: 10px;
    white-space: nowrap;
  }
}
</style>