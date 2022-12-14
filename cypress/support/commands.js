const {locales} = require('../../locales/config');
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('locales', ()=>{
	return [
    { code: 'tr', iso: 'tr-TR', file: 'tr/index.js' },
    { code: 'en', iso: 'en-US', file: 'en/index.js' }
  ]
})
