<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 mb-4 mt-5">
				<div class="card p-2">
					<iframe width="1092" height="954" :src="trailer" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="card-body">
						<h5 class="card-title">{{ title }}</h5>
						<p class="card-text">{{ text }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        props: ['title', 'text', 'trailer'],
        name: 'TrailerBox'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>