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
        width="180">
      </el-table-column>
      <el-table-column
        prop="image"
        label=""
        width="180">
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
            studentID: '65-588-9886',
            image: 'Download'
          }, {
            date: '2019-10-19',
            name: 'Kaitlin Almeida',
            address: '15-593-4785',
            image: 'Download'
          }, {
            date: '2019-10-20',
            name: 'Marcelo Archiza',
            address: '74-555-9863',
            image: 'Download'
          }, {
            date: '2019-10-20',
            name: 'Jacob Cho',
            studentID: '00-000-0000',
            image: 'Download'
          }]
        }
      }
    }
  </script>