<template>
  <div id="app">
    <Header />
    <div class="site-wrapper">
      <div class="grid">
        <SideBar />
        <main class="main-content grid__item medium-up--four-fifths" id="MainContent">
          <router-view/>
        </main>
      </div>
      <hr />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export default {
  name: 'app',
  components: {
    Header,
    SideBar,
    Footer
  }
}
</script>

<style lang="scss">
</style>
