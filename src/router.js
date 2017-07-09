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
import Login from './manager/views/login.vue'
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
                    managerRouter: Panel,
                }
            },
            {
                path: '/login',
                components: {
                    managerRouter: Login,
                }
            },
            {
                path: '/users',
                components: {
                    managerRouter: UsersList,
                }
            },
            {
                path: '*',
                redirect: to => {
                    // const { hash, params, query } = to
                    // if (query.to === 'foo') {
                    //     return { path: '/foo', query: null }
                    // }
                    // if (hash === '#baz') {
                    //     return { name: 'baz', hash: '' }
                    // }
                    // if (params.id) {
                    //     return '/with-params/:id'
                    // } else {
                    //     return '/bar'
                    // }
                    console.log('passou por aqui')
                    if(!Auth.user.authenticated){
                        return '/login'
                    }
                }
            }
        ]
    }
];

export default new VueRouter({

    routes,
    linkActiveClass: 'is-active'

})
