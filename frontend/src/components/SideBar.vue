<template>
<div id="shopify-section-sidebar" class="shopify-section">
  <div data-section-id="sidebar" data-section-type="sidebar-section">
    <nav class="grid__item small--text-center medium-up--one-fifth" role="navigation" style="padding: 0">
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

          <li class="site-nav__item" :class="activeClass('')">
            <a href="/" class="site-nav__link" aria-current="page">Home</a>
          </li>

          <div v-if="collections">
            <li class="site-nav__item" v-for="(c, index) in collections" :key="index" :class="activeClass(c.slug)">
              <a :href="`/collections/${c.slug}`" class="site-nav__link">{{c.name}}</a>
            </li>
          </div>

        </ul>
        <ul class="list--inline social-links">

          <li>
            <a href="https://www.facebook.com/shopify" title="Shopify Shirts on Facebook">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 20 20">
                <path fill="#444"
                  d="M18.05.811q.439 0 .744.305t.305.744v16.637q0 .439-.305.744t-.744.305h-4.732v-7.221h2.415l.342-2.854h-2.757v-1.83q0-.659.293-1t1.073-.342h1.488V3.762q-.976-.098-2.171-.098-1.634 0-2.635.964t-1 2.72V9.47H7.951v2.854h2.415v7.221H1.413q-.439 0-.744-.305t-.305-.744V1.859q0-.439.305-.744T1.413.81H18.05z">
                </path>
              </svg>
              <span class="icon__fallback-text">Facebook</span>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/shopify" title="Shopify Shirts on Twitter">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 20 20">
                <path fill="#444"
                  d="M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z">
                </path>
              </svg>
              <span class="icon__fallback-text">Twitter</span>
            </a>
          </li>

          <li>
            <a href="https://www.pinterest.com/shopify" title="Shopify Shirts on Pinterest">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-pinterest" viewBox="0 0 20 20">
                <path fill="#444"
                  d="M9.958.811q1.903 0 3.635.744t2.988 2 2 2.988.744 3.635q0 2.537-1.256 4.696t-3.415 3.415-4.696 1.256q-1.39 0-2.659-.366.707-1.147.951-2.025l.659-2.561q.244.463.903.817t1.39.354q1.464 0 2.622-.842t1.793-2.305.634-3.293q0-2.171-1.671-3.769t-4.257-1.598q-1.586 0-2.903.537T5.298 5.897 4.066 7.775t-.427 2.037q0 1.268.476 2.22t1.427 1.342q.171.073.293.012t.171-.232q.171-.61.195-.756.098-.268-.122-.512-.634-.707-.634-1.83 0-1.854 1.281-3.183t3.354-1.329q1.83 0 2.854 1t1.025 2.61q0 1.342-.366 2.476t-1.049 1.817-1.561.683q-.732 0-1.195-.537t-.293-1.269q.098-.342.256-.878t.268-.915.207-.817.098-.732q0-.61-.317-1t-.927-.39q-.756 0-1.269.695t-.512 1.744q0 .39.061.756t.134.537l.073.171q-1 4.342-1.22 5.098-.195.927-.146 2.171-2.513-1.122-4.062-3.44T.59 10.177q0-3.879 2.744-6.623T9.957.81z">
                </path>
              </svg>
              <span class="icon__fallback-text">Pinterest</span>
            </a>
          </li>

          <li>
            <a href="https://instagram.com/shopify" title="Shopify Shirts on Instagram">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 512 512">
                <path
                  d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z">
                </path>
                <path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path>
                <circle cx="390.5" cy="121.5" r="30.2"></circle>
              </svg>
              <span class="icon__fallback-text">Instagram</span>
            </a>
          </li>

          <li>
            <a href="https://snapchat.com/add/shopify" title="Shopify Shirts on Snapchat">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-snapchat" viewBox="0 0 56.693 56.693">
                <path
                  d="M28.66 51.683c-.128 0-.254-.004-.38-.01a3.24 3.24 0 0 1-.248.01c-2.944 0-4.834-1.336-6.661-2.628-1.262-.892-2.453-1.733-3.856-1.967a12.448 12.448 0 0 0-2.024-.17c-1.186 0-2.122.182-2.806.316-.415.081-.773.151-1.045.151-.285 0-.593-.061-.727-.519-.116-.397-.2-.78-.281-1.152-.209-.956-.357-1.544-.758-1.605-4.67-.722-6.006-1.705-6.304-2.403a.898.898 0 0 1-.072-.299.526.526 0 0 1 .44-.548c7.178-1.182 10.397-8.519 10.53-8.83l.012-.026c.44-.89.526-1.663.257-2.297-.493-1.16-2.1-1.67-3.163-2.008-.26-.082-.507-.16-.701-.237-2.123-.84-2.3-1.7-2.216-2.14.142-.747 1.142-1.268 1.95-1.268.222 0 .417.039.581.116.955.447 1.815.673 2.558.673 1.025 0 1.473-.43 1.528-.487-.026-.486-.059-.993-.092-1.517-.213-3.394-.478-7.61.595-10.018 3.218-7.215 10.043-7.776 12.057-7.776l.884-.009h.119c2.02 0 8.858.562 12.078 7.78 1.074 2.41.808 6.63.594 10.021l-.009.147c-.03.473-.058.932-.082 1.371.051.052.463.449 1.393.485h.001c.707-.028 1.52-.253 2.41-.67.262-.122.552-.148.75-.148.3 0 .607.058.86.164l.016.007c.721.255 1.193.76 1.204 1.289.009.497-.37 1.244-2.233 1.98-.193.076-.44.154-.7.237-1.065.338-2.671.848-3.164 2.008-.269.633-.183 1.406.257 2.297l.011.026c.134.311 3.35 7.646 10.532 8.83.265.043.454.28.44.548a.884.884 0 0 1-.074.3c-.296.693-1.632 1.675-6.303 2.397-.381.059-.53.556-.757 1.599-.083.38-.167.752-.282 1.144-.1.34-.312.5-.668.5h-.058c-.248 0-.6-.045-1.046-.133-.79-.154-1.677-.297-2.805-.297-.659 0-1.34.058-2.026.171-1.401.234-2.591 1.074-3.85 1.964-1.831 1.295-3.72 2.63-6.666 2.63z">
                </path>
              </svg>
              <span class="icon__fallback-text">Snapchat</span>
            </a>
          </li>

          <li>
            <a href="https://vimeo.com/shopify" title="Shopify Shirts on Vimeo">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-vimeo" viewBox="0 0 20 20">
                <path fill="#444"
                  d="M.215 6.814l.899 1.203q1.249-.929 1.508-.929.99 0 1.843 3.153l.746 2.826q.517 1.958.807 3.009 1.127 3.153 2.833 3.153 2.712 0 6.581-5.21 3.793-4.951 3.93-7.83v-.335q0-3.504-2.803-3.595h-.213q-3.763 0-5.179 4.616.823-.35 1.432-.35 1.295 0 1.295 1.341 0 .168-.015.35-.091 1.082-1.28 2.955-1.219 1.965-1.813 1.965-.792 0-1.401-2.986-.183-.701-.777-4.524-.259-1.645-.96-2.437-.609-.686-1.523-.701-.122 0-.259.015-.96.091-2.849 1.752-.975.914-2.803 2.559z">
                </path>
              </svg>
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
import { db } from '@/config/firebaseInit'

export default {
  name: 'sidebar',
  components: {},
  computed: {
  },
  data() {
    return {
      collections: [],
      collection: null
    }
  },
  firestore() {
    return {
      collections: db.collection('collections')
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.collection = this.$route.params.collection_id
    });
  },
  methods: {
    activeClass(data) {
      let activeClass = "site-nav--active";

      if (data === this.collection) {
        return activeClass
      } else if (data == '' && this.collection == undefined) {
        return activeClass
      } else {
        return null
      }

    }
  }
}
</script>

<style lang="css" scoped>
</style>
