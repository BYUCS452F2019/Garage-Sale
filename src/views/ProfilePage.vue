<template>
  <div>
    <b-modal id="remove-item" title="Remove Item" ok-title="Yes" cancel-title="No">
      <p class="my-4">Are you sure you want to remove this item for sale?</p>
    </b-modal>
    <h1 style="text-align:center">Profile</h1>
    <contact />
    <add-items-button />
    <!-- <el-button style="float:right" @click="$router.push('/profile/edit')">Edit Profile</el-button> -->
    <h4 style="text-align:center">My Items for Sell</h4>
    <b-table striped hover :items="userItems" :fields="data">
      <!-- <template v-slot:cell(remove)>
        <b-button size="sm" class="mr-1">stuff</b-button>
      </template>-->
    </b-table>
    <!-- <b-button v-b-modal.remove-item>Visible Modal for now</b-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from "./Contact";
import { mapState, mapActions } from 'vuex';
import AddItemsButton from "./../components/AddItemsButton";

export default {
  components: {
    Contact,
    AddItemsButton
  },
  data() {
    return {
      data: [
        { label: "Item Name", key: "item_name" },
        { label: "Description", key: "description" },
        { label: "Date Added", key: "date_added" },
        { label: "Price", key: "price" },
        { label: "Area Code", key: "area_code" }
        // { label: "Remove", key: "remove" }
      ],
      items: [
        {
          item_name: "Cool Lamp",
          description: "A sick Lamp!",
          date_added: "10/30/2019",
          price: "500",
          area_code: "84606"
        }
      ]
    };
  },
  computed: {
    ...mapState("users", ["userItems"]),
    ...mapState("account", ["user"]),
  },
  created() {
    const waitForUser = setInterval(()=> {
      if (this.user){
        clearInterval(waitForUser);
        const user_id = this.user.user_id;
        this.getAllUserItems(user_id);
      }
    }, 10);
    
    
  },
  methods: {
    ...mapActions("users", ["getAllUserItems"] ),
    removeItem() {
      this.addItemMenuVisible = false;
    }
  }
};
</script>
