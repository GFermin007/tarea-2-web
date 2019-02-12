<template>
    <div>
        <div class="container">
            <div class="row mt-4 mb-4">
                <cajita v-for="(movie, index) in movies" :key="index"
                    :title="movie.title"
                    :text="movie.text"
                    :href="movie.href"
                    :img="movie.img">
                </cajita>
            </div>
        </div>
    </div>
</template>

<script>
    import Cajita from './Cajita.vue';
    import MovieService from '../services/MovieService.js';

    export default {
        name: 'Trailers',
        data: () => {
            return {
                movies: MovieService
            }
        },
        components: {
            Cajita
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.back-back{
    background-image: url('https://www.bolsamania.com/cine/wp-content/uploads/2019/01/46-1.jpg');
    background-size: cover;
}
</style>
