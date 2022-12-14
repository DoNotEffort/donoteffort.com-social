import Vue from 'vue'
import defaultLayout from '../layouts/default'

import loginPage from '../pages/user/login'

export default () => [
	{
		path: '/user',
		component: defaultLayout,
		redirect: { name: 'login' },
		name: 'user',
		meta: {
			layout: "authentication",
			permissions: {
				roles: ["guest"],
				redirect: 'home'
			}
		},
		children: [
			{
				path: 'login',
				name: 'login',
				component: loginPage,
				meta: {
					title: "login"
				}
			},
		]
	}
]