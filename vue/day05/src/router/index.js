import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/components/layout';

import Home from '@/views/Home';
import My from '@/views/My';
import Login from '@/views/Login';
import Blog from '@/views/Blog';
import Forum from '@/views/Forum';
import About from '@/views/About';

Vue.use(VueRouter);

// 通用页面
export const constRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        meta: {
            title: '首页',
            icon: 'weixin' 
        },
        children: [
            {
                path: 'home',
                component: Home,
                meta: {
                    title: '主页'
                }
            },
            {
                path: 'my',
                component: My,
                meta: {
                    title: '我的'
                }
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        hidden: true  // 自定义属性，用于区别导航菜单是否显示
    }
];

// 权限页面
export const permissionRoutes = [
    {
        path: '/blog',
        component: Layout,
        redirect: '/blog/index',
        meta: { 
            title: '博客',
            roles: ['admin', 'visitor'],
            icon: 'qq'
        },
        children: [
            {
                path: 'index',
                component: Blog,
                meta: {
                    title: '我的博客',
                    roles: ['admin']
                }
            }
        ]
    },
    {
        path: '/forum',
        component: Layout,
        redirect: '/forum/index',
        meta: { 
            title: '论坛',
            roles: ['admin', 'visitor'],
            icon: 'qq' 
        },
        children: [
            {
                path: 'index',
                component: Forum,
                meta: {
                    title: '论坛天地',
                    roles: ['admin']
                }
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: { 
            title: '关于我们',
            roles: ['admin', 'visitor'] 
        }
    }
] 

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constRoutes
});