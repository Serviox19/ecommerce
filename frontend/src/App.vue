<template>
  <div id="app">
    <Header />
    <div class="site-wrapper">
      <div class="grid">
        <SideBar :collections.sync="collections" />
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
import { db } from '@/config/firebaseInit'

export default {
  name: 'app',
  components: {
    Header,
    SideBar,
    Footer
  },
  data() {
    return {}
  },
  firestore() {
    return {
      collections: db.collection('collections')
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>
