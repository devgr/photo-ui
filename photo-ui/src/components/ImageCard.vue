<template>
  <span>
    <span class="v-aligned"></span><img class="img-card v-aligned" :src="'/small/photos/' + config.path" v-on:click="expandImage = true" />
    <div v-if="expandImage" class="full-screen" v-on:click="expandImage = false" />
    <img v-if="expandImage" :src="'/large/photos/' + config.path" class="full-screen" v-on:click="expandImage = false" />
  </span>
</template>

<script>
export default {
  name: 'ImageCard',
  props: ['config'],
  data () {
    return {
      expandImage: false
    }
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
  cursor: pointer;
}
img.full-screen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  overflow: auto;
  cursor: pointer;
}
div.full-screen {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #000000bb;
  cursor: pointer;
}
</style>
