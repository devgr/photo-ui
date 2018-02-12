<template>
  <span>
    <span class="helper"></span><img class="wrapped-img" :src="config.imgSrc" />
  </span>
</template>

<script>
export default {
  name: 'ImageCard',
  props: ['config'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img.wrapped-img{
  max-width: 472px;
  max-height: 400px;
  vertical-align: middle;
  border-radius: 5px;
  box-shadow: 0px 0px 25px #111;
}
.helper{
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
</style>
