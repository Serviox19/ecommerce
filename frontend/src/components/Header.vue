<template>
  <div id="section-header">
    <div id="NavDrawer"></div>
    <header class="site-header">
      <div class="site-header__upper">
        <!-- Logo Left and cart / searchbox right -->
      </div>
      <Menu />
    </header>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'header',
  components: {
    Menu
  }
}
</script>

<style lang="css" scoped>
</style>
