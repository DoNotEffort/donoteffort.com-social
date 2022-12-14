<template>
	<div class="footer-column">
		<span class="footer-title st">{{title}}</span>
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'AppFooterColumn',
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>
<style>
.footer-column{
	display: flex;
	flex-direction: column;
	text-align: center;
}

.footer-title{
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0;
}

</style>