const MKoa = require('./MKoa');
const app = new MKoa();

// function delay() {
//     return new Promise(resolve => {
//         setTimeout(function(){
//             resolve();
//         }, 2000);
//     });
// }

// app.use(async (ctx, next) => {
//     ctx.body = '1';
//     await delay();
//     await next();
//     ctx.body += '6';
// });
// app.use(async (ctx, next) => {
//     ctx.body += '2';
//     await delay();
//     await next();
//     ctx.body += '5';
// });
// app.use(async (ctx, next) => {
//     ctx.body += '3';
//     await delay();
//     await next();
//     ctx.body += '4';
// });

// 路由中间件
const Router = require('./router');
const router = new Router();

router.get('/index', ctx => ctx.body = 'this is index page');
router.post('/user', ctx => {
    ctx.body = {
        name: 'Tom',
        age: 23
    };
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('project running...');
});