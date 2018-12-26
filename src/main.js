import '~/assets/css/style.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { head }) {
	Vue.component('Layout', DefaultLayout)

	head.link.push({
		rel: 'stylesheet',
		href: '/assets/css/style.css'
	})
}
