<template lang="html">
  <div class="grid grid--uniform" role="list">
    <h2>Show Collection Products</h2>
    <Product />
  </div>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'collection',
  components: {
    Product
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="css" scoped>
</style>
