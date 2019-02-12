<template>
    <div>
        <div class="container">
            <div class="row pt-4">
                <trailer-box
                    :title="movie.title"
                    :text="movie.text"
					:trailer="movie.trailer">
                </trailer-box>
            </div>
        </div>
    </div>
</template>

<script>
    import TrailerBox from './TrailerBox.vue';
	import MovieService from '../services/MovieService.js';

    export default {
        name: 'TrailerDetail',
        data: () => {
            return {
                movies: MovieService,
                movie: {}
            }
        },
        created () {

            // console.log(this.$route.params.id);
            this.movie = this.movies.filter((movie) => {
                return movie.id === this.$route.params.index;
            })[0];
            console.log(this.movie);
        },
        components: {
            TrailerBox
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
