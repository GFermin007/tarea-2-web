<template>
    <div>
        <div class="container">
            <div class="row mt-4 mb-4">
                <cajita v-for="(movie, index) in movies" :key="index"
                    :title="movie.title"
                    :text="movie.text"
                    :href="movie.href"
                    :label="movie.label"
                    :img="movie.img">
                </cajita>
            </div>
        </div>
    </div>
</template>

<script>
    import Cajita from './Cajita.vue';

    export default {
        name: 'Trailers',
        data: () => {
            return {
                movies: [
                    {
                        index: 0,
                        title: 'Dragon Ball Super: Broly',
                        text: 'Después de disputarse el Torneo de la Fuerza, la Tierra se encuentra en paz. Goku al darse cuenta de que en el universo aún hay personas extremadamente fuertes, continúa entrenando para volverse más fuerte.',
                        href: '/trailer/0',
                        img: 'https://sociorocketnewsen.files.wordpress.com/2018/07/db-1.jpg?w=640'
                    },
                    {
                        index: 1,
                        title: 'HOla',
                        text: 'Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.',
                        href: '/trailer/1',
                        img: 'https://sociorocketnewsen.files.wordpress.com/2018/07/db-1.jpg?w=640'
                    },
                    {
                        index: 2,
                        title: 'HOla',
                        text: 'Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.',
                        href: '/trailer/2',
                        img: 'https://sociorocketnewsen.files.wordpress.com/2018/07/db-1.jpg?w=640'
                    },
                    {
                        index: 3,
                        title: 'HOla',
                        text: 'Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.',
                        href: '/trailer/3',
                        img: 'https://sociorocketnewsen.files.wordpress.com/2018/07/db-1.jpg?w=640'
                    },
                    {
                        index: 4,
                        title: 'HOla',
                        text: 'Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.',
                        href: '/trailer/4',
                        img: 'https://sociorocketnewsen.files.wordpress.com/2018/07/db-1.jpg?w=640'
                    }
                ]
            }
        },
        components: {
            Cajita
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
