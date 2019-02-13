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
	},  
	watch: {
	$route(to) {
		var body = document.querySelector("body");

		body.classList = "";

		body.classList.add(to.name.toLowerCase());
	}
	},
	created() {
		var body = document.querySelector("body");

		body.classList = "";

		body.classList.add(this.$route.name.toLowerCase());
	}
    }

</script>