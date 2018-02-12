<template>
  <div class="outer">
    <div class="inner">
      <header-card v-if="config.view === 'header'" :config="config" />
    </div>
  </div>
</template>

<script>
import HeaderCard from './HeaderCard'
export default {
  name: 'ContentCard',
  props: ['config'],
  components: { HeaderCard },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.outer{
  width:472px;
  height:400px;
  margin: auto;
  padding: 2px;
}
div.inner{
  border: 1px solid #555;
  border-radius: 5px;
  padding: 5px;
  height: 388px;
}
</style>
