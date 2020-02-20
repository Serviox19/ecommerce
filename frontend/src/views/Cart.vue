<template lang="html">
  <div>
    <hr class="hr--border-top small--hide">
    <nav class="breadcrumb-nav small--text-center" aria-label="You are here">
      <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
      <a href="/" itemprop="url" title="Back to the frontpage">
      <span itemprop="title">Home</span>
      </a>
      <span class="breadcrumb-nav__separator" aria-hidden="true">›</span>
      </span>
      Your Shopping Cart
    </nav>
    <!-- /templates/cart.liquid -->
    <div class="grid">
      <div class="grid__item">
        <div id="EmptyCart">
          <h1>Shopping Cart</h1>
          <p class="cart--empty-message">Your cart is currently empty.</p>
          <p class="cart--continue-message">Continue browsing <a href="/collections">here</a>.</p>
          <p class="cart--cookie-message">Enable cookies to use the shopping cart</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  components: {},
  data() {
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="css" scoped>
</style>
