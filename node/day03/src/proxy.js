const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.static(__dirname + '/'));

// 请求代理中间件
app.use('/user', createProxyMiddleware({
    target: 'http://localhost:4000',
    changeOrigin: true
}));

module.exports = app;