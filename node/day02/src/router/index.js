const fs = require('fs');
const path = require('path');
const router = {};
router['/html'] = (ctx, next) => {
    ctx.type = 'text/html;chartset=utf-8';
    ctx.body = `我的名字是${ctx.body[0].name}，年龄是${ctx.body[0].age}`;
    next();
}

router['/'] = (ctx, next) => {
    let template = fs.readFileSync(path.resolve(__dirname, '../index.html')).toString();
    ctx.type = 'text/html;chartset=utf-8';
    ctx.body = template;
    next();
}

router['/img/done.png'] = (ctx, next) => {
    let template = fs.createReadStream(path.resolve(__dirname, '../img/done.png'));
    ctx.type = 'image/jpg';
    ctx.body = template;
    next();
}

module.exports = router;