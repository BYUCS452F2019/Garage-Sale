<template>
  <div>
    <div v-if="!isLoggedIn">
      <p>
        Welcome to the
        <strong>Garage Sale</strong> app where you can buy and sell without worrying about scammers.
      </p>
      <p>
        Please
        <router-link to="/login">Login</router-link>&#09; or
        <router-link to="/register">Register</router-link>
      </p>
    </div>
    <h1 style="text-align: center">Items for Sale</h1>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(name, index) in names" :key="index">{{name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in allItems" :key="index">
          <td v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      names: ["Item Name", "Description", "Date Added", "Price", "Area Code"],
      columns: ["item_name", "item_descr", "date_added", "price", "area_code"]
    };
  },
  created() {
    this.getAllItems();
  },
  computed: {
    ...mapState("users", ["allItems"])
  },
  methods: {
    ...mapActions("users", ["getAllItems"]),
    isLoggedIn() {
      return localStorage.getItem("user") != null;
    },
    loginUser(e) {
      this.submitted = true;
      // const { email, password } = this.form;
      // if (email && password) {
      this.login({ email: this.form.email, password: this.form.password });
      // }
    }
  }
};
</script>