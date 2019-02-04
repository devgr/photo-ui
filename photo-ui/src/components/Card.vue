<template>
  <div class="wrapper">
    <div class="card">
      <image-card v-if="config.type == 'image'" :config="config"/>
      <category-card v-else-if="config.type == 'category'" :config="config"/>
      <content-card v-else-if="config.type == 'content'" :config="config"/>
    </div>
  </div>
</template>

<script>
import ImageCard from './ImageCard'
import ContentCard from './ContentCard'
import CategoryCard from './CategoryCard'
export default {
  name: 'Card',
  props: ['config'],
  components: { ImageCard, ContentCard, CategoryCard },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  flex-grow: 1;
}
.card{
  height: 430px;
  margin: 4px 2px;
  white-space: nowrap;
  text-align: center;
}
</style>
