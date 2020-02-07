<template lang="html">
  <div>
    <hr class="hr--border-top small--hide" />
    <nav class="breadcrumb-nav small--text-center" aria-label="You are here">
      <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
        <a href="/" itemprop="url" title="Back to the frontpage">
          <span itemprop="title">Home</span>
        </a>
        <span class="breadcrumb-nav__separator" aria-hidden="true"> ›</span>
      </span>
      <span itemprop="title">
        {{ displayCollection() }}
      </span>
    </nav>
    <header class="grid">
      <h1 class="grid__item small--text-center medium-up--one-third">
        {{ displayCollection() }}
      </h1>

      <div class="collection-sorting grid__item medium-up--two-thirds medium-up--text-right small--text-center">
        <div class="collection-sorting__dropdown">
          <label for="SortBy" class="label--hidden">Sort by</label>
          <select name="SortBy" id="SortBy" data-value="best-selling">
            <option value="manual">Featured</option>
            <option value="best-selling">Best Selling</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
            <option value="created-descending">Date, new to old</option>
            <option value="created-ascending">Date, old to new</option>
          </select>
        </div>
      </div>

    </header>
    <div class="grid grid--uniform" role="list">
      <ProductBlock
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        :collection="$route.params.collection_id"
      />
    </div>
  </div>
</template>

<script>
import ProductBlock from '@/components/ProductBlock';
import { db } from '@/config/firebaseInit'

export default {
  name: 'collection',
  components: {
    ProductBlock
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getRelativeProducts()
    this.displayCollection()
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
    },
    displayCollection() {
      if (this.$route.params.collection_id) {
        let text = this.$route.params.collection_id
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
