<template>
    <div><h2>Items</h2>
    <p>This will be where the list of items will be!</p>
    <el-button @click="addItemMenuVisible = true">Add Item</el-button>
    <el-dialog
    :visible.sync="addItemMenuVisible"
    title="Add Item"
    width="40%">
    <el-form 
          ref="form" 
          :model="form" 
          label-width="120px">
          <el-form-item label="Item Name">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="Item Description">
            <el-input v-model="form.description"/>
          </el-form-item>
          <el-form-item label="Set Price">
            <el-input v-model="form.price"/>
          </el-form-item>
        </el-form>
        <span 
          slot="footer" 
          class="dialog-footer">
          <el-button @click="addItemMenuVisible = false">Cancel</el-button>
          <el-button 
            type="primary" 
            @click="addItem">Confirm</el-button>
        </span>
    </el-dialog>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="itemname"
        label="Item Name"
        >
      </el-table-column>
      <el-table-column
        prop="itemdescription"
        label="Description"
        >
      </el-table-column>
      <el-table-column
        prop="dateadded"
        label="Date Added">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price">
      </el-table-column>
      <el-table-column
        prop="areacode"
        label="Area Code">
      </el-table-column>
      <el-table-column
        prop="seller"
        label="Seller">
      </el-table-column>
      <el-table-column
       prop="buy"
       label="Operations">
       <template slot-scope="scope">
        <el-button
            type="text"
            size="small"
            @click="buy(scope.$index, scope.row)">Buy Now</el-button>
        </template>
      </el-table-column>
    </el-table>

    </div>
    
</template>

<script>

export default {
  name: 'itemslist',
  data() {
        return {
          tableData: [{
            itemname: 'Lamp',
            itemdescription: 'Slightly dusty desk lamp',
            dateadded: '10-18-2019',
            price: '$10',
            areacode: '55555',
            seller: 'Bob'
          }],
          addItemMenuVisible: false,
          form: {
            name: '',
            description: '',
            price: ''
          },
          date: '0',
          itemdate: ''
        }
  },
  methods: {
    buy() {
      console.log("hi");
    },
    addItem() {
      if (this.form.name === '') {
        this.$alert('Please enter an item name', 'Error', {
          confirmButtonText: 'OK'
        })
      }
      else if (this.form.description === '') {
        this.$alert('Please enter an item description', 'Error', {
          confirmButtonText: 'OK'
        })
      }
      else if (this.form.price === '' || isNaN(this.form.price)) {
        this.$alert('Please enter a numerical item price', 'Error', {
          confirmButtonText: 'OK'
        })
      }
      else {
        //code to add the item to the database
        console.log("Added item");
        this.date = new Date();
        this.itemdate = this.date.getMonth() + '-' + this.date.getDate() + '-' + this.date.getFullYear();
        console.log(this.itemdate);
        const item = {
          name: this.form.name, 
          description: this.form.description, 
          price: this.form.price, 
          //owner: ,
          //seller: ,
          //itemid: ,
          date: this.itemdate
        }
        this.addItemMenuVisible = false;
        //store dispatch or something
      }
    }
  }
}
</script>