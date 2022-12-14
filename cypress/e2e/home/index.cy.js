const { locales } = require('../../../locales/config.js');

describe('Home Page', () => {
	it('visit site', () => {
		cy.visit('/')
	});

	it('Check if the page is loaded', () => {
		cy.get('h1').should('contain', 'World2Space')
	})

	describe('Language', () => {

		it('Check if the language is in the list', () => {
			cy.visit('/')
			cy.get('[data-cy="language-changer"]').should('be.visible')
			locales.forEach(locale => {
				cy.get('[data-cy="language-changer"] span').should('contain', locale.code)
			})
		})

		it('Check if the language is changeable', () => {
			let languages = locales
			do {
				cy.get('[data-cy="language-changer"] span').contains(languages[0].code).click()
				cy.get('html').should('have.attr', 'lang', languages[0].iso)
				languages = languages.slice(1)

			} while (languages.length > 0)

		})


	})

})