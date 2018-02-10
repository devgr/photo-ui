<template>
  <div class="wrapper">
    <div class="card">
      <span class="helper"></span><img :src="config.imgsrc" />
    </div>
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
.wrapper{
  flex-grow: 1;
}
.card{
  height: 400px;
  /*width: 476px;*/
  margin-right: auto;
  margin-left: auto;
  margin-top: 2px;
  margin-bottom: 2px;
  white-space: nowrap;
  text-align: center;
}
.card>img{
  max-width: 476px;
  max-height: 400px;
  vertical-align: middle;
  border-radius: 5px;
}
.helper{
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
</style>
