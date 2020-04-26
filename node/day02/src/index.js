const Koa = require('koa');
const path = require('path');
const app = new Koa();
// 自定义koa router
// const router = require('./router');
// app.use((ctx, next) => {
//     ctx.body = [{
//         name: 'Tom',
//         age: 24
//     }];
//     next();
// });

// app.use((ctx, next) => {
//     if(router[ctx.url]) router[ctx.url](ctx, next);
// });

// app.use((ctx, next) => {
//     console.log(111);
// });

// // 静态资源中间件
const KoaStatic = require('koa-static');
app.use(KoaStatic(path.join(__dirname, './')));

// 路由koa-router
// const koaRouter = require('koa-router')();
// koaRouter.get('/hello', (ctx, next) => {
//     ctx.body = '<h1>hello</h1>';
// })
// app.use(koaRouter.routes());

app.listen(3000);