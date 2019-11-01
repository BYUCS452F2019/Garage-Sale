<template>
    
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Garage Sale</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/login" v-if="!status.loggedIn">Login</b-nav-item>
        <b-nav-item href="/register" v-if="!status.loggedIn">Register</b-nav-item>
        <b-nav-item href="/items" v-if="status.loggedIn">Items</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right v-if="status.loggedIn">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click="logoutUser">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>    
</template>

<script>

import { mapState, mapActions } from "vuex";
import {
    router
} from '../_helpers';

export default {
  name: "navBar",
  computed: {
    ...mapState("account", ["status"])
  },
  methods: {
    ...mapActions("account", ["logout"]),
    logoutUser(){
      this.logout()
      router.push('/login');
    }
  }
};
</script>