import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

// 无需令牌的白名单
const whiteList = ['/login'];

router.beforeEach(async(to, from, next) => {
    const hasToken = getToken();
    
    /**
     * 判断用户是否登录
     * 没有登录：
     *      是否在白名单：在白名单，跳转；不在白名单，跳转到登录页
     * 已经登录：
     *      访问登录页，跳转到首页；
     *      访问其他页，根据用户角色动态生成路由
     */ 
    if(hasToken) {
        if(to.path === '/login') {
            next('/');
        }else {
            const hasRoles = store.getters.roles && store.getters.roles.length > 0;
            if(hasRoles) {
                next();
            }else {
                try{
                    // 先获取用户角色信息
                    const roles = await store.dispatch('user/getUserInfo');
                    // 在获取权限信息
                    const accessedRoutes = await store.dispatch('permission/generateRoutes', roles);

                    router.addRoutes(accessedRoutes);
                    next({ ...to, replace: true });
                }catch (error) {
                    await store.dispatch('user/logout');
                    Message.error(error || 'Has Error');
                    next(`/login?redirect=${to.path}`);
                }
            }
        }
    }else {
        if(whiteList.indexOf(to.path) > -1) {
            next();
        }else {
            next(`/login?redirect=${to.path}`);
        }
    }
});