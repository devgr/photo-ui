<template>
  <span>
    <span class="v-aligned"></span><img class="img-card v-aligned" :src="config.imgSrc" />
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
img.img-card{
  max-width: 472px;
  max-height: 400px;
  border-radius: 5px;
  box-shadow: 0px 0px 25px #111;
}
</style>
