<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand text-white" href="#"><span class="text-bold text-info">Buenos</span>Trailers</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link text-white" to="/home">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-white" to="/trailers">Trailers</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link text-white" to="/contact">Contact</router-link>
                </li>
              </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>