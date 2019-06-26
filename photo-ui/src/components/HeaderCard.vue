<template>
  <div class="card-body">
    <h1>{{ config.heading }}</h1>
    <p class="subtitle">{{ config.subtitle }}</p>
    <br />
    <a v-on:click="contact();" class="btn">{{ config.contactBtnText }}</a>
    <a v-for="(socialBtn, key) in config.socialBtns" class="btn" :href="socialBtn.href" :key="key">
      {{ socialBtn.text }}
    </a>
    <br />
  </div>
</template>

<script>
export default {
  name: 'HeaderCard',
  props: ['config'],
  data () {
    return {}
  },
  methods: {
    contact () {
      this.$router.push('/contact')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
