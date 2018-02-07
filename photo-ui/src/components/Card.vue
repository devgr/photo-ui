<template>
  <div class="card">
    <p>{{ config.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['config'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  height: 476px;
  width: 476px;
  border: 1px black solid;
  margin: 2px;
}
</style>
