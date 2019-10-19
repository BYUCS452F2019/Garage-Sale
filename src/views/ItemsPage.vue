<template>
    <div><h2>Items</h2>
    <p>This will be where the list of items will be!</p>
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
          }]
        }
  },
  methods: {
    buy() {
      console.log("hi");
      console.log(index, row);
    }
  }
}
</script>