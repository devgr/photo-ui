<template>
  <div class="card-body">
    <h1>{{ config.title }}</h1>
    <br />
    <a v-on:click="home();" class="btn">&lt; Back</a>
    <br />
  </div>
</template>

<script>
import dataManager from '@/services/data'
export default {
  name: 'SubHeaderCard',
  props: ['config'],
  data () {
    return {}
  },
  methods: {
    home () {
      dataManager.home()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
