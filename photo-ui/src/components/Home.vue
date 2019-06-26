<template>
  <transition-group name="card-list" class="home" tag="div">
    <card v-for="(config, key) in cards" :config="config" :key="key"></card>
  </transition-group>
</template>

<script>
import Card from './Card'
import dataManager from '@/services/data'
export default {
  name: 'Home',
  components: { Card },
  data () {
    console.log(dataManager.data)
    return dataManager.data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card-list-move {
  transition: transform 1s;
}
.card-list-leave-active {
  transition: none;
}
.card-list-enter-active {
  transition: opacity 1s;
}
.card-list-enter {
  opacity: 0;
}
</style>
