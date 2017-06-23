import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./front/front.vue'),
        children: [
            {
                path: '',
                components: {
                    frontRouter: require('./front/views/home.vue'),
                }
            },
            {
                path: '/quem-somos',
                components: {
                    frontRouter: require('./front/views/about.vue'),
                }
            }
        ]
    },
    {
        path: '/admin',
        component: require('./manager/manager.vue'),
        children: [
            {
                path: '/login',
                components: {
                    managerRouter: require('./front/views/about.vue'),
                }
            }
        ]
    }
];

export default new VueRouter({

    routes,
    linkActiveClass: 'is-active'

})
