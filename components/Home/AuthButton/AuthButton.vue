<template>
	<a class="auth-button" :href="url">
		<slot></slot>
	</a>
</template>
<script>
export default {
	props: {
		url: {
			type: String,
			required: true
		}
	}
}
</script>
<style>
.auth-button{
	border-radius: 30px;
	padding: 10px 20px;
	color:white;
	text-decoration: none;
	margin: 0 5px;
}

</style>