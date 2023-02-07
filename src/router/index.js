import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { title: '首页'}
    },
    {
        path: '/investment',
        name: 'investment',
        component: () => import('../views/investment.vue'),
        meta: { title: '投资'}
    },
    {
        path: '/investment/investment-details',
        name: 'investment-details',
        component: () => import('../views/investment-details.vue'),
        meta: { title: '投资详情'}
    },
    {
        path: '/investment/fast-investment',
        name: 'fast-investment',
        component: () => import('../views/fast-investment.vue'),
        meta: { title: '快捷投资'}
    },
    {
        path: '/transaction',
        name: 'transaction',
        component: () => import('../views/transaction.vue'),
        meta: { title: '交易'}
    },
    {
        path: '/transaction/transaction-details',
        name: 'transaction-details',
        component: () => import('../views/transaction-details.vue'),
        meta: { title: '交易详情'}
    },
    {
        path: '/transaction/fast-trading',
        name: 'fast-trading',
        component: () => import('../views/fast-trading.vue'),
        meta: { title: '快捷交易'}
    },
    {
        path: '/whitePaper',
        name: 'whitePaper',
        component: () => import('../views/whitePaper.vue'),
        meta: { title: '白皮书'}
    },
    {
        path: '/Help',
        name: 'Help',
        component: () => import('../views/Help.vue'),
        meta: { title: '帮助'}
    },
    {
        path: '/personal',
        name: 'personal',
        component: () => import('../views/personal.vue'),
        meta: { title: '个人中心'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
	// base: '/',
    routes
})
router.beforeEach((to, from, next) => {
    let title = ''
    if (to.meta.params){
        title = `${to.meta.title}:${to.params[to.meta.params] || ''} - ${title}`
    }else {
        title = `${to.meta.title} - ${title}`
    }
    document.title = title
    if (to.path !== from.path) {
        store.dispatch('setLoading', true);
    }
    next();
})
router.afterEach((to, from) => {
    // 最多延迟 关闭 loading
    setTimeout(() => {
        store.dispatch('setLoading', false);
    }, 1500)
})
export default router
