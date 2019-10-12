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
    ]
});

export default router
