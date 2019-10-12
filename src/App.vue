<template>
  <el-container id="app">
    <el-header><h1 id="title">Contact Keeper</h1></el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu id="main-menu" :default-active="$route.meta.navIndex">
          <el-menu-item index="1" v-if="!isLoggedIn" @click="$router.push({ name: 'home' })">
            Home
          </el-menu-item>
          <el-menu-item index="2" v-if="!isLoggedIn" @click="$router.push({ name: 'login' })">
            Login
          </el-menu-item>
          <el-menu-item index="3" v-if="isLoggedIn" @click="$router.push({ name: 'contacts' })">
            Contacts
          </el-menu-item>
          <el-menu-item index="4" v-if="isLoggedIn" @click="$router.push({ name: 'profile' })">
            Profile
          </el-menu-item>
          <el-menu-item index="5" v-if="isLoggedIn">
            Logout
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'app',
  computed: {
    isLoggedIn() {
      return this.$store.state.user !== null
    }
  }
}
</script>

<style lang="stylus">
body, html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #EEE;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1004px;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  background: #FFF;
  position: relative;

  #main-menu {
    height: 100%;
    overflow: auto;
  }

  #title {
    background: #2c3e50;
    color: #FFF;
    padding: 16px 20px;
    margin: 0 -20px;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
}
</style>
