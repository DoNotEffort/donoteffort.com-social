require('dotenv').config()
const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: process.env.FRONTEND_URL,
		setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      })
    }
	},
	projectId: "c69a1o"
})