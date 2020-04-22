import request from '@/utils/request'

function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    });
}

function getUserInfo() {
    return request({
        url: '/user/getUserInfo',
        method: 'get'
    });
}

export {
    login,
    getUserInfo
}