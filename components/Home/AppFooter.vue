<template>
	<footer>
		<div class="footer-container">

		<home-app-footer-column v-for="item in footerItems" :title="item.title" :key="item.title">
			<a v-for="item in item.items" :href="item.url" :key="item.title">{{item.title}}</a>
		</home-app-footer-column>

		<!-- <home-app-footer-column title="Agreement">
			<a href="https://www.kozmonos.com/info/membership-agreement">Membership Agreement</a>
			<a href="https://www.kozmonos.com/info/privacy">Privacy Policy</a>
		</home-app-footer-column>
		<home-app-footer-column title="Support">
			<a href="https://www.kozmonos.com/info/contact">Contact</a>
		</home-app-footer-column>
		<home-app-footer-column title="Other Projects">
			<a href="https://www.kozmonos.com">Kozmonos</a>
		</home-app-footer-column> -->
	</div>
		<hr>
		<span class="copyright">Copyright © {{new Date().getFullYear()}} Kozmonos Inc. {{$t("home.copyright")}}</span>
	</footer>
</template>
<script>
export default {
	data() {
		return {
			footerItems:[
				{
					title: this.$t("home.footer.agreement.title"),
					items: [
						{
							title: this.$t("home.footer.agreement.items.membership"),
							url: "https://www.kozmonos.com/info/membership-agreement"
						},
						{
							title: this.$t("home.footer.agreement.items.privacy"),
							url: "https://www.kozmonos.com/info/privacy"
						}
					]
				},
				{
					title: this.$t("home.footer.support.title"),
					items: [
						{
							title: this.$t("home.footer.support.items.contact"),
							url: "https://www.kozmonos.com/info/contact"
						}
					]
				},
				{
					title: this.$t("home.footer.other-projects.title"),
					items: [
						{
							title: "Kozmonos",
							url: "https://www.kozmonos.com"
						}
					]
				}
			]
		}
	},
}
</script>
<style scoped>
footer{
	background-color: #1E1E1E;
	padding: 5rem 3rem 2.5rem;
}

.footer-container{
	display: flex;
	justify-content: space-between;
	width: 100%;
}

a{
	color: #fff;
	text-decoration: none;
	margin-top: 1rem;
	font-weight: 600;
}

hr{
	margin-top: 5rem;
    margin-bottom: 2rem;
		border-color: #ffffff3e;
}

.copyright{
	text-align: center;
    display: block;
}

@media only screen and (max-width: 768px) {
	.footer-container{
		flex-direction: column;
	}

	.footer-column{
		margin-bottom: 3rem;
	}

	hr{
		margin-top: 2rem;
	}

}
</style>