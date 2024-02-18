<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    Navigation
  },

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
