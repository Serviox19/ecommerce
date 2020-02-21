<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export default {
  name: 'default-layout',
  components: {
    Header,
    SideBar,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <div class="site-wrapper">
      <div class="grid">
        <SideBar />
        <main class="main-content grid__item medium-up--four-fifths" id="MainContent">
          <slot />
        </main>
      </div>
      <hr />
      <Footer />
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
