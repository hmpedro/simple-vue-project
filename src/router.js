import VueRouter from 'vue-router';
import Auth from './core/Auth'

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
import Login from './manager/views/login/login.vue'
import Panel from './manager/views/panel.vue'
import UsersList from './manager/views/users/users.list.vue'

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
                path: 'quem-somos',
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
                    managerRouter: Panel,
                }
            },
            {
                path: 'login',
                components: {
                    managerRouter: Login,
                }
            },
            {
                path: 'users',
                components: {
                    managerRouter: UsersList,
                }
            }
        ]
    }
];

let router = new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});

router.beforeEach((to, from, next) => {
    next();
});



export default router;