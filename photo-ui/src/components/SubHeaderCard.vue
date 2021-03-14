<template>
  <div class="card-body">
    <h1>{{ config.title }}</h1>
    <br />
    <div v-if="config.text" v-html="config.text" class="sub-header-card_extra-content" />
    <a v-if="!config.hideBackButton" v-on:click="home();" class="btn">&lt; Back</a>
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
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-header-card_extra-content {
  font-style: italic;
}
</style>
