<template>
  <div>
    <el-dialog :visible.sync="addItemMenuVisible" title="Remove Item" width="40%">
      <span>Are you sure you want to delete remove this item for sale?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addItemMenuVisible = false">Cancel</el-button>
        <el-button type="primary" @click="removeItem">Yes</el-button>
      </span>
    </el-dialog>

    <h2 style="display: inline-block">Profile</h2>
    <el-button style="float:right" @click="$router.push('/profile/edit')">Edit Profile</el-button>
    <contact-info></contact-info>

    <h4 style="text-align:center">My Items for Sell</h4>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="itemname" label="Item Name"></el-table-column>
      <el-table-column prop="itemdescription" label="Description"></el-table-column>
      <el-table-column prop="dateadded" label="Date Added"></el-table-column>
      <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column prop="areacode" label="Area Code"></el-table-column>
      <el-table-column prop="remove">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="addItemMenuVisible = true">Remove</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "profile",
  data() {
    return {
      tableData: [
        {
          itemname: "Lamp",
          itemdescription: "Slightly dusty desk lamp",
          dateadded: "10-18-2019",
          price: "$10",
          areacode: "55555"
        }
      ],
      addItemMenuVisible: false,
      form: {
        name: "",
        description: "",
        price: ""
      }
    };
  },
  components: {
    ContactInfo
  },
  methods: {
    removeItem() {
      this.addItemMenuVisible = false;
    }
  }
};
</script>
