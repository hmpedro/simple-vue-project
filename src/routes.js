import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./front/views/home.vue')
    },
    {
        path: '/about',
        component: require('./front/views/about.vue')
    }
]

export default new VueRouter({

    routes,
    linkActiveClass: 'is-active'

})
