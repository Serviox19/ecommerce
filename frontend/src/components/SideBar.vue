<template>
<div id="shopify-section-sidebar" class="shopify-section">
  <div data-section-id="sidebar" data-section-type="sidebar-section">
    <nav class="grid__item small--text-center medium-up--one-fifth" role="navigation">
      <hr class="hr--small medium-up--hide">
      <button id="ToggleMobileMenu" class="mobile-menu-icon medium-up--hide" aria-haspopup="true" aria-owns="SiteNav">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="icon__fallback-text">Menu</span>
      </button>
      <div id="SiteNav" class="site-nav" role="menu">
        <ul class="list--nav">

          <li class="site-nav__item site-nav--active">
            <a href="/" class="site-nav__link" aria-current="page">Home</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/accessories" class="site-nav__link">Accessories</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/denim" class="site-nav__link">Denim</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/footwear" class="site-nav__link">Footwear</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/jeans" class="site-nav__link">Jeans</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/outerwear" class="site-nav__link">Outerwear</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/pants" class="site-nav__link">Pants</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/shirts" class="site-nav__link">Shirts</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/t-shirts" class="site-nav__link">T-Shirts</a>
          </li>

          <li class="site-nav__item">
            <a href="/collections/shorts" class="site-nav__link">Shorts</a>
          </li>

        </ul>
        <ul class="list--inline social-links">

          <li>
            <a href="https://www.facebook.com/shopify" title="Shopify Shirts on Facebook">
              <span class="icon__fallback-text">Facebook</span>
            </a>
          </li>


          <li>
            <a href="https://twitter.com/shopify" title="Shopify Shirts on Twitter">
              <span class="icon__fallback-text">Twitter</span>
            </a>
          </li>


          <li>
            <a href="https://www.pinterest.com/shopify" title="Shopify Shirts on Pinterest">
              <span class="icon__fallback-text">Pinterest</span>
            </a>
          </li>


          <li>
            <a href="https://instagram.com/shopify" title="Shopify Shirts on Instagram">
              <span class="icon__fallback-text">Instagram</span>
            </a>
          </li>


          <li>
            <a href="https://snapchat.com/add/shopify" title="Shopify Shirts on Snapchat">
              <span class="icon__fallback-text">Snapchat</span>
            </a>
          </li>


          <li>
            <a href="https://vimeo.com/shopify" title="Shopify Shirts on Vimeo">
              <span class="icon__fallback-text">Vimeo</span>
            </a>
          </li>



        </ul>
      </div>
      <hr class="medium-up--hide hr--small hr--border-bottom">
    </nav>
  </div>

</div>
</template>

<script>

export default {
  name: 'sidebar',
  components: {}
}
</script>

<style lang="css" scoped>
</style>
