<template>
  <div>
    <div class="label">{{label}}</div>
    <div class="value">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'LabelValue',
  props: {
    label: String,
    value: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
div {
  display: flex;
  flex-wrap: wrap;
  
  .label {
    font-weight: bold;
    width: 110px;

  }
  .value {
    flex: 1
  }
}
</style>
