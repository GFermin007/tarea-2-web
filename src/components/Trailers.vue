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
                        img: 'https://sociorocketnewsen.files.wordpress.com/2018/07/db-1.jpg?w=640',
                        trailer: 'https://youtu.be/wuIbeQv3v7c'
                    },
                    {
                        index: 1,
                        title: 'Avengers: End Game',
                        text: 'Después de los devastadores eventos de Avengers: Infinity War (2018), el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para deshacer las acciones de Thanos y restaurar el orden en el universo.',
                        href: '/trailer/1',
                        img: 'https://img-cdn.hipertextual.com/files/2018/12/avengers-4-endgame.jpg?strip=all&lossy=1&quality=60&resize=670%2C410&ssl=1?w=640',
                        trailer: 'https://youtu.be/ee1172yeqyE'
                    },
                    {
                        index: 2,
                        title: 'The Lion King',
                        text: 'The Lion King (El Rey León), el clásico animado de Disney de 1994, regresa en versión live-action, con Jon Favreau a cargo de la dirección a partir de un guion de Jeff Nathanson. De tinte musical, el live-action llegará a los cines en julio de 2019 por el 25 aniversario del estreno de la película original.',
                        href: '/trailer/2',
                        img: 'https://i0.wp.com/disneynews.us/wp-content/uploads/2018/07/The-Lion-King-2019-Live-Action-Movie.jpg?fit=500%2C246&ssl=1?w=640',
                        trailer: 'https://youtu.be/4CbLXeGSDxg'
                    },
                    {
                        index: 3,
                        title: 'Detective Pikachu',
                        text: 'En un mundo donde las personas recolectan Pokémon para luchar, un niño se encuentra con un Pikachu inteligente que habla y busca ser un detective.',
                        href: '/trailer/3',
                        img: 'https://www.nintenderos.com/wp-content/uploads/2018/11/maxresdefault-3-12.jpg?w=640',
                        trailer: 'https://youtu.be/du88WArjb8w'
                    },
                    {
                        index: 4,
                        title: 'Shazam',
                        text: 'Todos tenemos un superhéroe dentro de nosotros, solo se necesita un poco de magia para llevarlo a cabo. En el caso de Billy Batson, gritando una palabra: ¡SHAZAM! - este niño adoptivo de 14 años puede convertirse en el superhéroe adulto Shazam.',
                        href: '/trailer/4',
                        img: 'https://www.mdcu-comics.fr/uploads/news/2018/12/news_illustre_1546272895_522.jpg?w=640',
                        trailer: 'https://youtu.be/-oD7B7oiBtw'
                    },
                    {
                        index: 5,
                        title: 'Aquaman',
                        text: 'Arthur Curry, el heredero nacido en el hombre del reino submarino de Atlantis, emprende una búsqueda para evitar una guerra entre los mundos del océano y la tierra.',
                        href: '/trailer/5',
                        img: 'http://mouse.latercera.com/wp-content/uploads/2019/02/aquaman.jpg?w=640',
                        trailer: 'https://youtu.be/ZmqJJqFX_CU'
                    },
                    {
                        index: 6,
                        title: 'Spiderman: Into the spider-verse',
                        text: 'El adolescente Miles Morales se convierte en el Hombre Araña de su realidad, cruzándose en su camino con cinco contrapartes de otras dimensiones para detener una amenaza para todas las realidades.',
                        href: '/trailer/6',
                        img: 'http://www.viax.cl/wp-content/uploads/2018/12/da2b80753295c7fb5c3550eabbddf110.jpg?w=640',
                        trailer: 'https://youtu.be/tg52up16eq0'
                    },
                    {
                        index: 7,
                        title: 'Glass',
                        text: 'El guardia de seguridad David Dunn usa sus habilidades sobrenaturales para rastrear a Kevin Wendell Crumb, un hombre perturbado que tiene veinticuatro personalidades.',
                        href: '/trailer/7',
                        img: 'https://www.bolsamania.com/cine/wp-content/uploads/2019/01/46-1.jpg?w=640',
                        trailer: 'https://youtu.be/95ghQs5AmNk'
                    },
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
