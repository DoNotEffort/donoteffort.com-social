<template>
  <div>
    <div v-if="!decodedToken">
      <home-auth-button-register-auth-button />
      <home-auth-button-login-auth-button />
    </div>
		<div v-else>
			<home-auth-button-panel-auth-button />
		</div>
  </div>
</template>
<script>
export default {
  data() {
		return {
			decodedToken: null,
		}
  },
	beforeMount() {
		this.decodedToken = this.cookieDecode()
	},
  methods: {
    cookieDecode() {
      return this.$cookies.get('token')
    },
  },
}
</script>
