import defaultLayout from '../layouts/default'

import homePage from '../pages/index'

import user from './user';

export default ()=>[
			{
				path: '/',
				name: 'home',
				component: homePage
			},
				...user(),
]