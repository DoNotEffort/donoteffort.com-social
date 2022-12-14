const defaultLocale = 'en'

const locales = [
	{
		code: "tr",
		iso: "tr-TR"
	},
	{
		code: "en",
		iso: "en-US"
	}
].map((locale) => Object.assign(locale, {
	file: `${locale.code}/index.js`
}))


module.exports= {
	defaultLocale,
	locales,
	seo: true,
	baseUrl: process.env.FRONTEND_URL,
	lazy: true,
	parsePages: false,
	vueI18nLoader: true,
	langDir: '~/locales/',
	strategy: 'prefix_and_default',
	detectBrowserLanguage: {
		useCookie: true,
		cookieKey: 'i18n_redirected',
		alwaysRedirect: false
	},
	vueI18n: {
		fallbackLocale: defaultLocale
	}
}