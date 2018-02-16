<template>
  <div class="outer">
    <div class="inner">
      <header-card v-if="config.view === 'header'" :config="config" />
      <sub-header-card v-else-if="config.view === 'subheader'" :config="config" />
      <contact-card v-else-if="config.view === 'contact'" :config="config" />
    </div>
  </div>
</template>

<script>
import HeaderCard from './HeaderCard'
import SubHeaderCard from './SubHeaderCard'
import ContactCard from './ContactCard'
export default {
  name: 'ContentCard',
  props: ['config'],
  components: { HeaderCard, SubHeaderCard, ContactCard },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.outer{
  width:400px;
  height:400px;
  margin: auto;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
div.inner{
  border: 1px solid #666;
  border-radius: 5px;
  padding: 5px;
}
</style>
