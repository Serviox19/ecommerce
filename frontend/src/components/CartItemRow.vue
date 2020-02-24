<template>
  <tr class="cart__row responsive-table__row">
    <td class="cart__table-cell--image small--text-center">
      <div id="CartImageWrapper--" class="cart__image-wrapper supports-js">
        <a class="cart__image-container" href="" style="padding-top:100.0%;">
          <img id="CartImage--" class="cart__image lazyautosizes lazyloaded" :src="info.main_image" data-widths="[180, 230, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="alt here" itemprop="image" />
        </a>
      </div>
    </td>
    <td class="cart__table-cell--meta small--text-center">
      <p>
        <a href="">{{ info.name }}</a>
        <br><small>**Extra info (color, size)**</small>
      </p>
      <p class="txt--minor">
        <a href="" class="cart__remove" @click="removeItem(item)">Remove</a>
      </p>
    </td>
    <td class="cart__table-cell--price medium-up--text-center" data-label="Price">
      <span>${{ info.price }}</span>
    </td>
    <td data-label="Quantity" class="medium-up--text-center cart__table-cell--quantity">
      <label class="visually-hidden" for="">Quantity</label>
      <input class="quantity-selector" type="number" name="" id="" value="1" min="0">
    </td>
    <td data-label="Total" class="text-right cart__table-cell--line-price">
      <span>$399.95</span>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'cart-item',
  components: {},
  props: ['info'],
  data() {
    return {}
  },
  created() {
  },
  mounted() {
    console.log(this.info);
  },
  methods: {
    removeItem() {
      this.$store.commit('deleteProduct')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
