<template>
    
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Garage Sale</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/login" v-if="!isLoggedIn">Login</b-nav-item>
        <b-nav-item href="/register" v-if="!isLoggedIn">Register</b-nav-item>
        <b-nav-item href="/items" v-if="isLoggedIn">Items</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right v-if="isLoggedIn">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>    
</template>

<script>
export default {
  name: "navBar",
  methods: {
    isLoggedIn() {
      return localStorage.getItem('user') != null;
    },
    logout(){
      this.logout()
    }
  }
};
</script>