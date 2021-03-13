<template>
  <div class="background-img" :style='styleObj'>
    <div class="cover" v-on:click="transition()">
      <span class="v-aligned"></span><h1 class="v-aligned">{{ config.title }}</h1>
    </div>
  </div>
</template>

<script>
import dataManager from '@/services/data'
export default {
  name: 'CategoryCard',
  props: ['config'],
  data () {
    return {
      styleObj: {
        background: 'no-repeat center/100% url("/small/photos/' + this.config.path + '")'
      }
    }
  },
  methods: {
    transition () {
      dataManager.toView(this.config.to)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.background-img{
  width: 400px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0px 0px 25px #111;
  margin: auto;
}
div.cover{
  height: 100%;
  width: 100%;
  background-color: #00000099;
  border-radius: 5px;
}
div.cover:hover{
  cursor: pointer;
}
div.cover>h1{
  margin: auto;
  display: inline-block;
}
</style>
