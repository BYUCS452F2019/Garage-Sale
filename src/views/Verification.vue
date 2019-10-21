<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="studentID"
        label="StudentID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="image"
        label=""
        width="90">
        <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          Download
        </el-button>
      </template>
      </el-table-column>
      <el-table-column
        prop="approve"
        label="Approve"
        width="90">
        <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          Approve
        </el-button>
      </template>
      </el-table-column>
      <el-table-column
        prop="reject"
        label="Reject"
        width="90">
        <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          Reject
        </el-button>
      </template>
      </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2019-10-19',
            name: 'Tom Smith',
            studentID: '65-588-9886'
          }, {
            date: '2019-10-19',
            name: 'Kaitlin Almeida',
            studentID: '15-593-4785'
          }, {
            date: '2019-10-20',
            name: 'Marcelo Archiza',
            studentID: '74-555-9863'
          }, {
            date: '2019-10-20',
            name: 'Jacob Cho',
            studentID: '00-000-0000'
          }]
        }
      }
    }
  </script>