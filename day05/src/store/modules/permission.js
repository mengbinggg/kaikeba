import { constRoutes, permissionRoutes} from '@/router';

const state = {
    routes: [],  // 完整路由
    accessedRoutes: []  // 可访问路由
};

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.routes = constRoutes.concat(routes);
        state.accessedRoutes = routes;
    }
};

const actions = {
    // 生成路由
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            let accessedRoutes;
            if(roles.includes('admin')) {
                accessedRoutes = permissionRoutes || [];
            }else {
                accessedRoutes = filterPermissionRoutes(permissionRoutes, roles);
            }
            commit('SET_ROUTES', accessedRoutes);
            resolve(accessedRoutes);
        });
    }
};

// 过滤权限路由
function filterPermissionRoutes(routes, roles) {
    const accessedRoutes = [];

    routes.forEach(route => {
        if(hasPermission(route, roles)) {
            if(route.children && route.children.length > 0) {
                filterPermissionRoutes(route.children, roles);
            }
            accessedRoutes.push(route);
        }
    });

    return accessedRoutes;
}

// 判断有无权限访问路由
function hasPermission(route, roles) {
    if(route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role));
    }
    return false;
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
};