<template>
  <div class="home">
    <Card v-for="(config, key) in cards" :config="config" :key="key"></Card>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'Home',
  components: { Card },
  data () {
    return {
      cards: [
        {
          message: 'hello'
        },
        {
          message: 'box 1'
        },
        {
          message: 'box 2'
        },
        {
          message: 'box 3'
        },
        {
          message: 'box 4'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  height: 100%;
  width: 100%;
}
</style>
