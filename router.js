import Vue from 'vue'
import Router from 'vue-router'

import routes from "./routes";
import localeConfig from "./locales/config";


Vue.use(Router)

const {defaultLocale,locales}=localeConfig

const defaultLang=defaultLocale
const langs=localeConfig.map((lang)=>lang.code)
const datas=[]

const allRoutes=()=>{
  let willAdd=routes()
    langs.forEach((lang)=>{
        const routesData=routes()

        routesToNewData(routesData,lang)
        willAdd=[...willAdd,...routesData]
    })
  return willAdd
}

const routesToNewData=(routes,lang)=>{
  routes.forEach((route)=>{
    if(!route.name)
      route.name=route.path.replace("/","_")

    let suffixName="___"+lang

    if(lang==defaultLang){
        suffixName+="___default"
    }else{
        route.path="/"+lang+(route.path=="/"?"":route.path)
  }
    route.name+=suffixName

		const prefixPath=route.path

    if(route.children)
      scanner(route.children,prefixPath,suffixName)
  })
}

const scanner=(routes,prefixPath,lang)=>{
  routes.forEach((route)=>{
  if(route.children){
		prefixPath+=route.path
    scanner(route.children,prefixPath,lang)
  }

  if(route.name)
    route.name+=lang

  })
}


export function createRouter() {
  return new Router({
    mode: 'history',
    routes:allRoutes()
  })
}