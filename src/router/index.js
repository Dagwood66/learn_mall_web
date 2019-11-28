import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("../pages/Home")
        },
        {
            path: '/my',
            name: 'My',
            component: () => import("../pages/My")
        },
        {// 用户信息更改界面
            path: '/myUpdate',
            name: 'MyUpdate',
            component: () => import("../pages/MyUpdate")
        },
        {// 登陆
            path: '/login',
            name: 'Login',
            component: () => import("../pages/Login")
        },
        {// 注册
            path: '/register',
            name: 'Register',
            component: () => import("../pages/Register")
        },
        {// 订单列表
            path: '/orders',
            name: 'Orders',
            component: () => import("../pages/Orders")
        },
        {// 商品详情
            path: '/productDetails',
            name: 'ProductDetails',
            component: () => import("../pages/ProductDetails")
        },
    ]
});

export default router
