import Vue from 'vue'
import VueRouter from 'vue-router'


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
    
    {
        path: '/MoneyAppPage/add/payment/Food?value=200',
        name: 'Food',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/MoneyAppPage/add/payment/Transport?value=50',
        name: 'Transport',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/MoneyAppPage/add/payment/Entertainment?value=1600',
        name: 'Entertainment',
        component: () => import('../components/money/AddForm')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router