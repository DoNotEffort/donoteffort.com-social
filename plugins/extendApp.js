import extend from '../utils/extend-vue-app'

export default async function ({ app }) {
	extend(app, {
		async mounted() {
			console.log("Mounted plugins/extendApp!")
	},
	})
}