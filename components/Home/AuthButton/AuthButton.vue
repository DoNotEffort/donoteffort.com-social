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
	text-decoration: none;
	margin: 0 5px;
	font-weight: bold;
	transition: all .3s;
}

.auth-button:hover{
	box-shadow: 7px 5px #9271e7;
}

</style>