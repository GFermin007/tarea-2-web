
	<template>
      <div class="d-flex flex-row justify-content-center">
        <div class="col-md-6 mt-5 shadow-lg p-3 mb-5 rounded text-white text-center">
            <h1>Con<span class="text-info">tactanos</span></h1>
            <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="name" placeholder="Introduce tu nombre. . .">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="last-name" placeholder="Introduce tu apellido. . .">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="email" placeholder="Correco electronico">
                </div>
                <div class="form-group">
                  <textarea class="form-control" id="coment" rows="3" placeholder="Estanos ansiosos por leerte. . ."></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
	</template>

<script>
	export default {
		name: 'Contact'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>