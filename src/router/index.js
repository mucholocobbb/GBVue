import Vue from 'vue'
import VueRouter from 'vue-router'
import categories from '@/router/catRoutes'


Vue.use(VueRouter)

const routes = [
    {
        path: '/CalculatorPage',
        name: 'Calculator',
        component: () => import(/*webpackChunkName: "CalculatorPage" */ '../components/calc/Calculator')
    },
    {
        path: '/SoundButtonPage',
        name: 'Sound Button',
        component: () => import(/*webpackChunkName: "SoundButtonPage" */ '../components/SoundBtn')
    },
    {
        path: '/MoneyAppPage',
        name: 'Money Notes',
        component: () => import(/*webpackChunkName: "MoneyAppPage" */ '../components/money/MoneyApp')
    },
    ...categories,
    
    
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router