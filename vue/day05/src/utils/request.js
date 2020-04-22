import axios from 'axios'
import store from '@/store'
import * as auth from './auth'
import { Message, MessageBox } from 'element-ui'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});

// 请求拦截（设置cookie信息）
service.interceptors.request.use(config => {
    if(store.getters.token) {
        config.headers['Authorization'] = 'Bearer' + auth.getToken();
    }
    return config;
}, err => {
    return Promise.reject(err);
});

// 响应拦截（设置响应处理）
service.interceptors.response.use(res => {
    const data = res.data;

    if(data.code != 1) {
        Message({
            message: data.msg || 'error',
            type: 'error',
            duration: 5000
        });
        // 自定义错误格式
        if(data.code == 100) {
            MessageBox.confirm('登录状态异常，请重新登录！', '提示', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                store.dispatch('user/resetToken').then(() => {
                    location.reload();
                });
            });
        }
        return Promise.reject(data.msg || 'error');
    }else {
        return data;
    }
}, err => {
    Message({
        message: err.msg,
        type: 'error',
        duration: 5000
    })
    return Promise.reject(err);
});

export default service