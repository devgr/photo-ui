<template>
  <div class="home">
    <card v-for="(config, key) in cards" :config="config" :key="key"></card>
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
          type: 'content',
          view: 'header'
        },
        {
          type: 'image',
          imgSrc: 'static/img/IMG_1075-01.jpg'
        },
        {
          type: 'image',
          imgSrc: 'static/img/IMG_1081-01.jpg'
        },
        {
          type: 'image',
          imgSrc: 'static/img/IMG_1106-01.jpg'
        },
        {
          type: 'image',
          imgSrc: 'static/img/IMG_1128-02.jpg'
        },
        {
          type: 'image',
          imgSrc: 'static/img/IMG_1129-01.jpg'
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
