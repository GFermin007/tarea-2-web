<template>
    <div class="col-sm-3 mb-4">
        <div class="card">
            <a :href="href" target="_blank">
                <img :src="img" height="200" class="card-img-top" alt="">
            </a>
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Trailer'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
