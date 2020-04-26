const path = require('path');
const fs = require('fs');

function MKoaStatic(staticPath) {
    return async function (ctx, next) {
        const url = '.' + ctx.url.replace('\\', '\/');
        if (url.indexOf(staticPath) > -1) {
            try {
                const filePath = path.resolve(__dirname, url);
                const stats = fs.statSync(filePath);
                const isDir = stats.isDirectory();
                if (isDir) {
                    // 文件夹
                    let dir = fs.readdirSync(filePath);
                    let itemPath, html = '';
                    dir.forEach((item, index) => {
                        itemPath = url.replace(staticPath, '') + '/' + item;
                        html += `<p><a src='${itemPath}'>${item}</a></p>`;
                    });
                    ctx.body = html;
                } else {
                    // 文件
                    let data = fs.readFileSync(filePath);
                    ctx.body = data;
                }
            } catch (e) {
                ctx.response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                });
                ctx.body = '资源不存在';
            }
        } else {
            await next();
        }
    }
}

module.exports = MKoaStatic;