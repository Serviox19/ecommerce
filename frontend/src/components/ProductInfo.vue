<template lang="html">
  <div itemscope="" itemtype="http://schema.org/Product" id="ProductSection" data-section-id="product-template" data-section-type="product-template" data-image-zoom-type="lightbox" data-show-extra-tab="false" data-extra-tab-content="" data-cart-enable-ajax="true" data-enable-history-state="true">
    <meta itemprop="name" content="">
    <meta itemprop="url" content="">
    <meta itemprop="image" content="">
    <div class="grid product-single">
      <div class="grid__item medium-up--one-half">
        <div id="ProductImageWrapper-392019443727" class="product-single__featured-image-wrapper supports-js hidden" data-image-id="392019443727">
          <div class="product-single__photos" data-image-id="392019443727" style="padding-top:100.0%;">
            <img id="ProductImage-392019443727" class="product-single__photo lightbox lazyautosizes lazyloaded" src="" data-widths="[180, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="" />
          </div>
        </div>
        <div id="ProductImageWrapper-392019476495" class="product-single__featured-image-wrapper supports-js hidden" data-image-id="392019476495">
          <div class="product-single__photos" data-image-id="392019476495" style="padding-top:100.0%;">
            <img id="ProductImage-392019476495" class="product-single__photo lazypreload lightbox lazyautosizes lazyloaded" src="" data-widths="[180, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="" >
          </div>
        </div>
        <div id="ProductImageWrapper-392019509263" class="product-single__featured-image-wrapper supports-js hidden" data-image-id="392019509263">
          <div class="product-single__photos" data-image-id="392019509263" style="padding-top:100.0%;">
            <img id="ProductImage-392019509263" class="product-single__photo lazypreload lightbox lazyautosizes lazyloaded" src="" data-widths="[180, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="" />
          </div>
        </div>
        <div id="ProductImageWrapper-392019542031" class="product-single__featured-image-wrapper supports-js" data-image-id="392019542031">
          <div class="product-single__photos" data-image-id="392019542031" style="padding-top:100.0%;">
            <img id="ProductImage-392019542031" class="product-single__photo lazypreload lightbox lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0037/5472/products/SGT-580A_04_200x200.jpg?v=1509388971" data-widths="[180, 360, 470, 600, 750, 940, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" alt="" />
          </div>
        </div>
        <noscript>
          <img src="" alt="">
        </noscript>
        <ul class="product-single__thumbnails grid grid--uniform" id="ProductThumbs">
          <li class="grid__item small--one-half medium-up--one-quarter">
            <a href="" class="product-single__thumbnail" data-image-id="392019443727">
            <img src="" alt="">
            </a>
          </li>
          <li class="grid__item small--one-half medium-up--one-quarter">
            <a href="" class="product-single__thumbnail" data-image-id="392019476495">
            <img src="" alt="">
            </a>
          </li>
          <li class="grid__item small--one-half medium-up--one-quarter">
            <a href="" class="product-single__thumbnail" data-image-id="392019509263">
            <img src="" alt="">
            </a>
          </li>
          <li class="grid__item small--one-half medium-up--one-quarter">
            <a href="" class="product-single__thumbnail" data-image-id="392019542031">
            <img src="" alt="">
            </a>
          </li>
        </ul>
        <ul class="gallery hidden">
          <li data-image-id="392019443727" class="gallery__item" data-mfp-src=""></li>
          <li data-image-id="392019476495" class="gallery__item" data-mfp-src=""></li>
          <li data-image-id="392019509263" class="gallery__item" data-mfp-src=""></li>
          <li data-image-id="392019542031" class="gallery__item" data-mfp-src=""></li>
        </ul>
      </div>
      <div class="grid__item medium-up--one-half">
        <div class="product-single__meta small--text-center">
          <h1 class="product-single__title" itemprop="name">
            {{product.name}}
          </h1>
          <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
            <meta itemprop="priceCurrency" content="CAD">
            <link itemprop="availability" href="http://schema.org/OutOfStock">
            <p class="product-single__prices">
              <span class="visually-hidden">Regular price</span>
              <span id="ProductPrice" class="product-single__price" itemprop="price" content="699.95">${{ product.price }}</span>
            </p>
            <form method="post" action="/cart/add" id="product_form_69902958607" accept-charset="UTF-8" class="product-form" enctype="multipart/form-data">
              <input type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓">
              <div class="selector-wrapper">
                <label for="ProductSelect-product-template-option-0">Colour</label>
                <select class="single-option-selector" data-option="option1" id="ProductSelect-product-template-option-0">
                  <option value="Black">Black</option>
                </select>
              </div>
              <div class="selector-wrapper">
                <label for="ProductSelect-product-template-option-1">Size</label>
                <select class="single-option-selector" data-option="option2" id="ProductSelect-product-template-option-1">
                  <option value="OSFA">OSFA</option>
                </select>
              </div>
              <select name="id" id="ProductSelect-product-template" class="product-single__variants" style="display: none;">
                <option disabled="disabled">
                  Black / OSFA - Sold Out
                </option>
              </select>
              <div class="product-single__cart-submit-wrapper product-single__shopify-payment-btn">
                <button type="submit" name="add" id="AddToCart" class="btn product-single__cart-submit shopify-payment-btn btn--secondary" disabled="">
                <span id="AddToCartText">Sold Out</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="product-single__description rte" itemprop="description">
      <p>This is a demonstration store. You can purchase products like this from <a href="https://www.spccstore.com/" target="_blank" class="text-link">Sergeant Pepper Clothing Co.</a>.</p>
      <br>The Spoke Weekender Bag has been hand crafted in South Africa. It has been constructed from 100% Nylon waterproof fabric and built up with genuine rubber for protection and support. Some of the finer details include full leather handle straps for extra comfort and durability, hidden internal zip pockets and branded S.P.C.C metal clips.
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-info',
  props: ['product'],
  components: {},
  computed: {},
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>

  @media screen and (min-width: 750px) {
    #ProductImage-392019443727 {
      max-width: 720px;
      max-height: 720.0px;
    }
    #ProductImageWrapper-392019443727 {
      max-width: 720px;
    }
   }

  @media screen and (max-width: 749px) {
    #ProductImage-392019443727 {
      max-width: 720px;
      max-height: 720px;
    }
    #ProductImageWrapper-392019443727 {
      max-width: 720px;
    }
  }

  @media screen and (min-width: 750px) {
    #ProductImage-392019476495 {
      max-width: 720px;
      max-height: 720.0px;
    }
    #ProductImageWrapper-392019476495 {
      max-width: 720px;
    }
   }


  @media screen and (max-width: 749px) {
    #ProductImage-392019476495 {
      max-width: 720px;
      max-height: 720px;
    }
    #ProductImageWrapper-392019476495 {
      max-width: 720px;
    }
  }

  @media screen and (min-width: 750px) {
    #ProductImage-392019509263 {
      max-width: 720px;
      max-height: 720.0px;
    }
    #ProductImageWrapper-392019509263 {
      max-width: 720px;
    }
   }


  @media screen and (max-width: 749px) {
    #ProductImage-392019509263 {
      max-width: 720px;
      max-height: 720px;
    }
    #ProductImageWrapper-392019509263 {
      max-width: 720px;
    }
  }

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
