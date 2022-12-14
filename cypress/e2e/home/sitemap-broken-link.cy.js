const X2JS = require('x2js');
let sites = []

const nuxtConfig = require('../../../nuxt.config.js');

describe('Check routes', () => {

	it('Check sitemap', () => {
		cy.request("/sitemap.xml")
			.then(({ status, body }) => {
				expect(status).to.eq(200)

				const x2js = new X2JS();
				const json = x2js.xml2js(body);

				expect(json).to.have.property('urlset')
				expect(json.urlset).to.have.property('url')
				expect(json.urlset.url).to.be.an('array').and.not.empty

				sites = json.urlset.url.map(url =>
					url.loc
						.replace(nuxtConfig.sitemap.hostname, '')
					 .replace(nuxtConfig?.router?.base, '/')
				)
				cy.log(JSON.stringify(sites))
			})
	})


	it('Check if the page is loaded', () => {

		sites.forEach(site => {
			cy.log(site)
			cy.request({ url: site, failOnStatusCode: false })
				.then((response) => {
					expect(response.status).to.eq(200)
				})
		})

	})
})