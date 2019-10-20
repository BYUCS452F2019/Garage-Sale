<template>
  <div class="about">
    <h2>Register</h2>
    <el-form ref="form" v-model="form" label-width="80px" @submit.prevent="register()">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="FirstName">
        <el-input type="firstName" v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item label="LastName">
        <el-input type="lastName" v-model="form.lastName"></el-input>
      </el-form-item>
      <el-form-item label="StudentID">
        <el-input type="studentID" v-model="form.studentID"></el-input>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          single
          :file-list="fileList">
          <el-button size="small" type="primary">Upload ID</el-button>
          <span id="fileDescription" slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</span>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register()">Register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>

export default {
  name: 'register',
  data: () => {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('userRegister',{
        email: this.form.email, 
        password: this.form.password,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        studentID: this.form.studentID
      })
      this.$router.push({ name: 'pending'});
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
    }
  }
}

var p;
var canvas = document.createElement("canvas");
var img1=document.createElement("img"); 

function getBase64Image(){     
    p=document.getElementById("fileUpload").value;
    img1.setAttribute('src', p); 
    canvas.width = img1.width; 
    canvas.height = img1.height; 
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(img1, 0, 0); 
    var dataURL = canvas.toDataURL("image/png");
    alert("from getbase64 function" + dataURL);    
    return dataURL;
} 

function b64toByteArray(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      
      return bytearrays[0];
}
</script>

<style>
@import '../assets/styles/register.css';
</style>
