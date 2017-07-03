import VueRouter from 'vue-router';

/*
* FRONT
*/
import Front from './front/front.vue'
import Home from './front/views/home.vue'
import About from './front/views/about.vue'

/*
* MANAGER
*/
import Manager from './manager/manager.vue'
import Login from './manager/views/login.vue'


let routes = [
    {
        path: '/',
        component: Front,
        children: [
            {
                path: '',
                components: {
                    frontRouter: Home,
                }
            },
            {
                path: '/quem-somos',
                components: {
                    frontRouter: About,
                }
            }
        ]
    },
    {
        path: '/admin',
        component: Manager,
        children: [
            {
                path: '',
                components: {
                    managerRouter: Login,
                }
            }
        ]
    }
];

export default new VueRouter({

    routes,
    linkActiveClass: 'is-active'

})
