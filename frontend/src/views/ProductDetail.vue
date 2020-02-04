<template>
  <div>
    <hr class="hr--border-top small--hide" />
    <nav class="breadcrumb-nav small--text-center" aria-label="You are here">
      <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
        <a href="/" itemprop="url" title="Back to the frontpage">
          <span itemprop="title">Home</span>
        </a>
        <span class="breadcrumb-nav__separator" aria-hidden="true"> ›</span>
      </span>
      <a @click='$router.go(-1)' class="collection-link" itemprop="url" title="Back to the frontpage">
        <span itemprop="title">
          {{ displayCollection() }}
        </span>
      </a>
      <span class="breadcrumb-nav__separator" aria-hidden="true"> ›</span>
      <span itemprop="title">
        {{ displayProduct() }}
      </span>
    </nav>
    <h1>Show Product Here</h1>
  </div>
</template>

<script>
export default {
  name: 'product-detail',
  components: {},
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    displayCollection() {
      if (this.$route.params.collection_id) {
        let text = this.$route.params.collection_id
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
    },
    displayProduct() {
      if (this.$route.params.product_id) {
        let text = this.$route.params.product_id
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
    }
  }
}
</script>

<style lang="css" scoped>

  .collection-link {
    cursor: pointer
  }

</style>
