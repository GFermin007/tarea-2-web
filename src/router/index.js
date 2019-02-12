import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Trailers from '@/components/Trailers'
import Contact from '@/components/Contact'
import Trailer from '@/components/Trailer'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/trailers',
            name: 'Trailers',
            component: Trailers
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/trailer/:id',
            name: 'Trailer',
            component: Trailer
        }
    ]
})