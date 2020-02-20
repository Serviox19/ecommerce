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
      <div class="grid__item" style="padding:0">
        <div id="EmptyCart" v-if="!cart.length">
          <h1>Shopping Cart</h1>
          <p class="cart--empty-message">Your cart is currently empty.</p>
          <p class="cart--continue-message">Continue browsing <a href="/collections">here</a>.</p>
          <p class="cart--cookie-message">Enable cookies to use the shopping cart</p>
        </div>

        <table class="responsive-table table--no-border" v-else>
          <thead class="cart__row cart__header-labels small--hide">
            <tr>
              <th class="text-left cart__table-cell--image">Product</th>
              <th class="text-center cart__table-cell--meta"></th>
              <th class="text-center cart__table-cell--price">Price</th>
              <th class="text-center cart__table-cell--quantity">Quantity</th>
              <th class="text-right cart__table-cell--line-price">Total</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loop for each product -->
            <CartItemRow />
          </tbody>
        </table>

        <footer class="cart__footer">
          <div class="grid">
            <div class="grid__item medium-up--one-half">
              <label for="CartSpecialInstructions" class="label--block">Special instructions for seller</label>
              <textarea name="note" id="CartSpecialInstructions" class="input--block cart__note"></textarea>
            </div>
            <div class="grid__item text-center medium-up--one-half medium-up--text-right">
              <p>
                <span class="cart__subtotal-title h3">Subtotal</span>
                <span class="cart__subtotal h3">$399.95</span>
              </p>

              <p class="cart__policies txt--emphasis rte">Taxes and shipping calculated at checkout
              </p>
              <p>
                <button type="submit" name="update" class="btn btn--secondary update-cart">
                  <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-update" viewBox="0 0 25 25">
                    <path
                      d="M22.339 1.386a1.606 1.606 0 0 0-1.743 1.458l-.077.875A12.124 12.124 0 0 0 12.211.456C5.478.456 0 5.933 0 12.666s5.478 12.212 12.211 12.212c4.653 0 8.84-2.587 10.923-6.748a1.606 1.606 0 1 0-2.872-1.438 8.959 8.959 0 0 1-8.051 4.973c-4.962 0-8.999-4.035-8.999-8.998 0-4.961 4.037-8.999 8.999-8.999a8.93 8.93 0 0 1 6.172 2.452l-1.292-.115a1.604 1.604 0 0 0-1.741 1.458 1.605 1.605 0 0 0 1.457 1.742l4.799.426a1.601 1.601 0 0 0 1.742-1.458l.448-5.045a1.607 1.607 0 0 0-1.457-1.742z">
                    </path>
                  </svg>
                  <span class="icon__fallback-text">Update Cart</span>
                </button>
                <a class="btn btn--secondary" href="">Continue shopping</a>
              </p>
              <p>
                <button type="submit" name="checkout" class="btn">Check Out</button>
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  </div>
</template>

<script>
import CartItemRow from '@/components/CartItemRow'

export default {
  name: 'cart',
  components: {
    CartItemRow
  },
  data() {
    return {
      cart: this.$store.state.cart
    }
  },
  created() {
  },
  mounted() {
    console.log(this.$store.state.cart);
  },
  methods: {}
}
</script>

<style lang="css" scoped>
</style>
