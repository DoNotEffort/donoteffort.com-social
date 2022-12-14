<template>
	<div class="slogan">
		<img :src="donut1" alt="donut" class="donut donut-1">
		<img :src="donut2" alt="donut" class="donut donut-2">
		
		<heart-fancy class="fancy heart" />
		<location-fancy class="fancy location" />
		<comment-fancy class="fancy comment" />
		<social-fancy class="fancy social" />

		<p v-for="(item, index) in $t('home.slogans')" :key="index" v-html="item"></p>
	</div>
</template>
<script>
import donut1 from '@/static/assets/images/home/donuts/bg-1.png'
import donut2 from '@/static/assets/images/home/donuts/bg-2.png'
import heartFancy from '@/static/assets/images/home/fancy/heart.svg?inline'
import locationFancy from '@/static/assets/images/home/fancy/location.svg?inline'
import commentFancy from '@/static/assets/images/home/fancy/comment.svg?inline'
import socialFancy from '@/static/assets/images/home/fancy/social.svg?inline'

export default {
	components: {
		heartFancy,
		locationFancy,
		commentFancy,
		socialFancy
	},
	data(){
		return {
			donut1,
			donut2,

		}
	},
}
</script>
<style scoped>


.slogan{
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
	justify-content: center;
	position: relative;
}

.slogan p{
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0;
}

div.slogan > p:last-child{
	font-size: 3.5rem;
}

.donut{
	position: absolute;
	width: 10rem;
	z-index: -1;
}

.donut-1{
	top: 10vh;
	right: 0;
}

.donut-2{
	bottom: 10vh;
	left: 0;
}

.heart{
	bottom: 10vh;
	right: 5vw;
}

.location{
	top: 10vh;
	left: 5vw;
}

.comment{
	bottom: 10vh;
	left: 30vw;
}

.social{
	top: 10vh;
	right: 30vw;
}
</style>