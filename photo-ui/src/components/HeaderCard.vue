<template>
  <div class="card-body">
    <h1>George Darling Photography</h1>
    <p class="subtitle">Nashville, TN based photographer for portraits, events, and music.</p>
    <br />
    <a v-on:click="contact();" class="btn">Contact</a>
    <a class="btn" href="https://www.instagram.com/georgedphotos/">Instagram</a>
    <br />
  </div>
</template>

<script>
import dataManager from '@/services/data'
export default {
  name: 'HeaderCard',
  props: ['config'],
  data () {
    return {}
  },
  methods: {
    contact () {
      dataManager.contact()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
