<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

    export default {
        name: 'app',
        components: {
          NavBar,
          Footer
        }
    }

</script>

<style>
  body {
      background-color: #f5f5f5;
  }
</style>