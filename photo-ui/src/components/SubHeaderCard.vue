<template>
  <div class="card-body">
    <h1>{{ config.title }}</h1>
    <br />
    <div v-if="config.text">
      <p class="subtitle">{{ config.text }}<a v-if="config.link" :href="config.link.href">{{ config.link.text }}</a></p>
      <br />
    </div>
    <a v-on:click="home();" class="btn">&lt; Back</a>
    <br />
  </div>
</template>

<script>
export default {
  name: 'SubHeaderCard',
  props: ['config'],
  data () {
    return {}
  },
  methods: {
    home () {
      this.$router.push('home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
