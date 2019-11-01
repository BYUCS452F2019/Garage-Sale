<template>
  <div id="contact-info">
    <!-- <div class="avatar">
      <img :src="image">
    </div>-->
    <div class="details">
      <label-value label="First Name" value="John"></label-value>
      <label-value label="Last Name" value="Doe"></label-value>
      <label-value label="Email" value="john_doe@byu.edu"></label-value>
      <label-value label="StudentID" value="420420420"></label-value>
      <label-value label="Area Code" value="22015"></label-value>
    </div>
  </div>
</template>

<script>
import LabelValue from "./LabelValue";
import avatar from "./../assets/avatar.png";

export default {
  created() {
    this.getUserInfo();
  },
  computed: {
    ...mapState("users", ["userInfo"])
  },
  methods: {
    ...mapActions("users", ["getUserInfo"])
  },
  name: "ContactInfo",
  components: { LabelValue },
  props: {
    image: {
      type: String,
      default: avatar
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#contact-info {
  display: flex;
  flex-wrap: wrap;

  .avatar {
    flex: 0;

    img {
      background-color: #EEE;
      border: 1px solid #DDD;
      width: 256px;
      height: 256px;
      margin-right: 20px;
    }
  }

  .details {
    flex: 1;
    min-width: 50%;

    > * {
      margin: 10px 0;
    }
  }
}
</style>
