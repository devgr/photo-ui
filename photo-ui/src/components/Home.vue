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
          imgsrc: 'static/img/IMG_1075-01.jpg'
        },
        {
          imgsrc: 'static/img/IMG_1081-01.jpg'
        },
        {
          imgsrc: 'static/img/IMG_1106-01.jpg'
        },
        {
          imgsrc: 'static/img/IMG_1128-02.jpg'
        },
        {
          imgsrc: 'static/img/IMG_1129-01.jpg'
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
