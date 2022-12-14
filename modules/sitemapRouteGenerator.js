export default function () {
  this.nuxt.hook('generate:done', (context) => {

		const defaultLang = this.options.i18n.defaultLocale
		const locales = this.options.i18n.locales.map((lang) => lang.code)

    const routesToExclude = [] 
    const allRoutes = Array.from(context.generatedRoutes)
  
		const routes = allRoutes
		.filter(route =>{
			//custom excluded
			let isExcluded = routesToExclude.includes(route)

			if(isExcluded)
				return false
			//---------
			//language excluded
			locales.forEach(localeCode => {
				if(route.startsWith("/"+localeCode))
					isExcluded = true
			})

			return !isExcluded
		})
		.map(route => {
			const routeData=route=="/" ? "" : route
			return {
				url:routeData,
				links:locales
						.map(lang => {
							const langData= lang==defaultLang
									? ""
									: "/"+lang

							return {
								lang,
								url: langData+routeData
							}
					})
			}
	})

    this.nuxt.options.sitemap.routes = [...routes]
  })
}