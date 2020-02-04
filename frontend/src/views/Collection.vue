<template lang="html">
  <div class="grid grid--uniform" role="list">
    <h2>Show Collection Products</h2>
    <Product
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
import Product from '@/components/Product';
import { db } from '@/config/firebaseInit'

export default {
  name: 'collection',
  components: {
    Product
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getRelativeProducts()
  },
  mounted() {
  },
  methods: {
    getRelativeProducts() {
      return db.collection('products').where('collection', '==', this.$route.params.collection_id)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let docData = doc.data();
          docData.id = doc.id;

          this.products.push(docData)
        })
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
