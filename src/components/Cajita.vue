<template>
    <div class="col-sm-3 mb-4">
        <div class="card">
            <router-link class="nav-link text-white" :to="href">
                <img :src="img" height="200" class="card-img-top" alt="">
            </router-link>
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'text', 'href', 'img'],
        name: 'Cajita'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    text-align: justify;
}
.card-title{
    min-height: 50px;
}
.card-text{
    min-height: 100px;
}
</style>
