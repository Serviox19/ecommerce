<template lang="html">
  <div class="product grid__item medium-up--one-third small--one-half slide-up-animation animated" role="listitem">

    <div class="supports-js" style="max-width: 600px; margin: 0 auto">
      <a href="/products/artillery-bomber-jacket-fatigue" class="product__image-wrapper" style="padding-top:100.0%" :title="product.name">
        <img class="product__image lazyautosizes lazyloaded" src="https://via.placeholder.com/250x300" />
      </a>
    </div>

  <!-- <noscript>
    <a href="/products/artillery-bomber-jacket-fatigue" class="product__image-wrapper" title="Stealth Bomber Jacket - Fatigue">
      <img src="https://via.placeholder.com/250x300" />
    </a>
  </noscript> -->

  <div class="product__title text-center">
    <a href="/products/artillery-bomber-jacket-fatigue">
      {{ product.name }}
    </a>
  </div>

  <div class="product__prices text-center">
    <span class="product__price">
      <span class="visually-hidden">Regular price</span>
      {{ product.price }}
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'product',
  props: ['product'],
  components: {},
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
</style>
