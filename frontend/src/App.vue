<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const default_layout = 'default';

export default {
  name: 'app',
  components: {},
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
</style>
