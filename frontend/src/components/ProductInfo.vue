<template lang="html">
  <div itemscope="" itemtype="" id="ProductSection" data-section-id="product-template" data-section-type="product-template" data-image-zoom-type="lightbox" data-show-extra-tab="false" data-extra-tab-content="" data-cart-enable-ajax="true" data-enable-history-state="true">
    <meta itemprop="name" content="">
    <meta itemprop="url" content="">
    <meta itemprop="image" content="">
    <div class="grid product-single">

    <div class="grid__item medium-up--one-half">

        <div id="ProductImageWrapper-391868907535" class="product-single__featured-image-wrapper supports-js" data-image-id="391868907535">
          <div class="product-single__photos" data-image-id="391868907535" style="padding-top:100.0%;">
            <img id="ProductImage-391868907535" class="product-single__photo lightbox lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0037/5472/products/SGT-1161A_01_200x200.jpg?v=1509388451" data-aspectratio="1.0" data-sizes="auto" alt="Product Main Img Alt">
          </div>
        </div>

        <ul class="product-single__thumbnails grid grid--uniform" id="ProductThumbs">

          <li class="grid__item small--one-third medium-up--one-third">
            <a href="" class="product-single__thumbnail">
              <img src="" alt="Product Thumbnail Alt">
            </a>
          </li>

          <li class="grid__item small--one-third medium-up--one-third">
            <a href="" class="product-single__thumbnail">
              <img src="" alt="Product Thumbnail Alt">
            </a>
          </li>

          <li class="grid__item small--one-third medium-up--one-third">
            <a href="" class="product-single__thumbnail">
              <img src="" alt="Product Thumbnail Alt">
            </a>
          </li>

          <li class="grid__item small--one-third medium-up--one-third">
            <a href="" class="product-single__thumbnail">
              <img src="" alt="Product Thumbnail Alt">
            </a>
          </li>

          <li class="grid__item small--one-third medium-up--one-third">
            <a href="" class="product-single__thumbnail">
              <img src="" alt="Product Thumbnail Alt">
            </a>
          </li>

        </ul>

    </div>

    <div class="grid__item medium-up--one-half">
      <div class="product-single__meta small--text-center">
        <h1 class="product-single__title" itemprop="name">{{ product.name }}</h1>

        <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">

          <link itemprop="availability" href="http://schema.org/InStock">

          <p class="product-single__prices">
            <span class="visually-hidden">Regular price</span>
            <span id="ProductPrice" class="product-single__price" itemprop="price" content="1599.95">$1,599.95</span>
          </p>

          <form id="product_form_69890703375" accept-charset="UTF-8" class="product-form">
            <input type="hidden" name="form_type" value="product">
            <input type="hidden" name="utf8" value="✓">
            <div class="selector-wrapper">
              <label for="ProductSelect-product-template-option-0">Colour</label>
              <select class="single-option-selector" data-option="option1" id="ProductSelect-product-template-option-0">
                <option value="Fatigue">Fatigue</option>
              </select>
            </div>
            <div class="selector-wrapper">
              <label for="ProductSelect-product-template-option-1">Size</label>
              <select class="single-option-selector" data-option="option2" id="ProductSelect-product-template-option-1">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
              </select>
            </div>
            <select name="id" id="ProductSelect-product-template" class="product-single__variants" style="display: none;">
              <option selected="selected" data-sku="" value="">Fatigue / Small - $1,599.95 CAD</option>
              <option data-sku="" value="">Fatigue / Medium - $1,599.95 CAD</option>
              <option data-sku="" value="">Fatigue / Large - $1,599.95 CAD</option>
              <option data-sku="" value="">Fatigue / X-Large - $1,599.95 CAD</option>
            </select>

            <div class="product-single__cart-submit-wrapper product-single__shopify-payment-btn">
              <button type="submit" name="add" id="AddToCart" class="btn product-single__cart-submit shopify-payment-btn btn--secondary">
                <span id="AddToCartText" @click="addToCart">Add to Cart</span>
              </button>

                <div data-shopify="payment-button" class="shopify-payment-button">
                  <div>
                    <div class="shopify-cleanslate">
                      <div id="shopify-svg-symbols" class="" aria-hidden="true">
                      </div>
                    </div>
                    <button type="button" class="shopify-payment-button__button shopify-payment-button__button--unbranded" @click="buyNow">Buy it now</button>
                  </div>
                </div>

            </div>

          </form>

        </div>


        <!-- /snippets/social-sharing.liquid -->
        <div class="social-sharing" data-permalink="">

          <a target="_blank" href="" class="social-sharing__link" title="Share on Facebook">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 20 20"><path fill="#444" d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z"></path></svg>
            <span aria-hidden="true">Share</span>
            <span class="visually-hidden">Share on Facebook</span>
          </a>

          <a target="_blank" href="" class="social-sharing__link" title="Tweet on Twitter">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 20 20"><path fill="#444" d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z"></path></svg>
            <span aria-hidden="true">Tweet</span>
            <span class="visually-hidden">Tweet on Twitter</span>
          </a>

          <a target="_blank" href="" class="social-sharing__link" title="Pin on Pinterest">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-pinterest" viewBox="0 0 20 20"><path fill="#444" d="M9.958.811q1.903 0 3.635.744t2.988 2 2 2.988.744 3.635q0 2.537-1.256 4.696t-3.415 3.415-4.696 1.256q-1.39 0-2.659-.366.707-1.147.951-2.025l.659-2.561q.244.463.903.817t1.39.354q1.464 0 2.622-.842t1.793-2.305.634-3.293q0-2.171-1.671-3.769t-4.257-1.598q-1.586 0-2.903.537T5.298 5.897 4.066 7.775t-.427 2.037q0 1.268.476 2.22t1.427 1.342q.171.073.293.012t.171-.232q.171-.61.195-.756.098-.268-.122-.512-.634-.707-.634-1.83 0-1.854 1.281-3.183t3.354-1.329q1.83 0 2.854 1t1.025 2.61q0 1.342-.366 2.476t-1.049 1.817-1.561.683q-.732 0-1.195-.537t-.293-1.269q.098-.342.256-.878t.268-.915.207-.817.098-.732q0-.61-.317-1t-.927-.39q-.756 0-1.269.695t-.512 1.744q0 .39.061.756t.134.537l.073.171q-1 4.342-1.22 5.098-.195.927-.146 2.171-2.513-1.122-4.062-3.44T.59 10.177q0-3.879 2.744-6.623T9.957.81z"></path></svg>
            <span aria-hidden="true">Pin it</span>
            <span class="visually-hidden">Pin on Pinterest</span>
          </a>

        </div>


      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'product-info',
  props: ['product'],
  components: {},
  computed: {
    formattedPrice: function () {
      return Number.parseFloat(this.product.price).toFixed(2)
    }
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    addToCart() {
      this.$store.commit('addProduct', this.product)
    },
    buyNow() {
      this.$store.commit('addProduct', this.product);
      this.$router.push({ path: "/cart" })
    }
  }
}
</script>

<style lang="css" scoped>

  @media screen and (min-width: 750px) {
    #ProductImage-392019542031 {
      max-width: 720px;
      max-height: 720.0px;
    }
    #ProductImageWrapper-392019542031 {
      max-width: 720px;
    }
   }



  @media screen and (max-width: 749px) {
    #ProductImage-392019542031 {
      max-width: 720px;
      max-height: 720px;
    }
    #ProductImageWrapper-392019542031 {
      max-width: 720px;
    }
  }

</style>
