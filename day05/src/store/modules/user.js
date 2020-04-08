import * as auth from '../../utils/auth';

const state = {
    roles: [],
    token: auth.getToken()
};

const mutations = {
    SET_ROLES: (state, roles) => {
        state.roles = roles;
    },
    SET_TOKEN: (state, token) => {
        state.token = token;
    }
};

const actions = {
    // 登录
    login({ commit }, userInfo) {
        const { username, password } = userInfo;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((username == 'mengbing' && password == '123') || (username == 'tom' && password == '123')) {
                    commit('SET_TOKEN', username);
                    auth.setToken(username);
                    resolve();
                }else {
                    reject('用户名/密码不正确');
                }
            }, 1000);
        });
    },
    // 获取用户信息（获取用户角色）
    getUserInfo({ commit, state }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const roles = state.token === 'mengbing' ? ['admin'] : ['visitor'];
                commit('SET_ROLES', roles);
                resolve(roles);
            }, 1000);
        });
    },
    // 退出
    logout({ commit }) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit('SET_TOKEN', null);
                commit('SET_ROLES', null);
                auth.removeToken();
                resolve();
            }, 1000);
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};