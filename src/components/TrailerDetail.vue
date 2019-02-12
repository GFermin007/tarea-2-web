<template>
    <div>
        <div class="container">
            <div class="row mt-4 mb-4">
                <trailer-box v-for="(movie, index) in movies" :key="index"
                    :title="movie.title"
                    :text="movie.text"
                    :href="movie.href"
                    :label="movie.label"
                    :img="movie.img">
                </trailer-box>
            </div>
        </div>
    </div>
</template>

<script>
    import TrailerBox from './TrailerBox.vue';

    export default {
        name: 'TrailerDetail',
        components: {
            TrailerBox
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
