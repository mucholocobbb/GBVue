import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/add/payment/Food?value=200',
        name: 'Food',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/add/payment/Transport?value=50',
        name: 'Transport',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/add/payment/Entertainment?value=1600',
        name: 'Entertainment',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/MoneyApp',
        name: 'money',
        component: () => import('../components/money/MoneyApp')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router