import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home.vue')
const category = () => import('../views/category/Category.vue')
const cart = () => import('../views/cart/Cart.vue')
const profile = () => import('../views/profile/Profile.vue')
const detail = ()=> import('../views/detail/Detail.vue')

Vue.use(VueRouter)

var routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    }, {
        path: '/cart',
        component: cart
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/detail:iid',
        component: detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router