const categoriesRoutes = [
    {
        path: '/add/payment/',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/Food?value=:value',
        name: 'Food',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/Food', 
        name: 'food',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/Transport?value=:value',
        name: 'Transport',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/Transport', 
        name: 'transport',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/Entertainment?value=:value',
        name: 'Entertainment',
        component: () => import('../components/money/AddForm')
    },
    {
        path: '/Entertainment', 
        name: 'entertainment',
        component: () => import('../components/money/AddForm')
    },

]

export default categoriesRoutes