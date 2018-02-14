<template>
  <div class="home">
    <card v-for="(config, key) in cards" :config="config" :key="key"></card>
  </div>
</template>

<script>
import Card from './Card'
import dataManager from '@/services/data'
export default {
  name: 'Home',
  components: { Card },
  data () {
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
</style>
