describe('Check routes', () => {
	it('Check if the page is loaded', () => {
		console.log("console.log")
		cy.log("cy.log")
		cy.task('log', 'cy.task')
	cy.intercept('/')
	cy.intercept('/user')
	cy.intercept('/user2')
	})
})