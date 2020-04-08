import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/components/layout';

Vue.use(VueRouter);

// 通用页面
export const constRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import("@/views/Home"),
                name: 'home',
                meta: {
                    title: '首页'
                }
            }
        ]
    },
    {
        path: '/login',
        component: () => import("@/views/Login"),
        hidden: true  // 自定义属性，用于区别导航菜单是否显示
    }
];

// 权限页面
export const permissionRoutes = [
    {
        path: '/about',
        component: Layout,
        redirect: '/about/index',
        children: [
            {
                path: 'index',
                component: () => import("@/views/About"),
                meta: {
                    title: '关于',
                    roles: ['admin', 'visitor']
                }
            }
        ]
    }
] 

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constRoutes
});