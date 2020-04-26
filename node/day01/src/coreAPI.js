// 1. 文件系统
const fs = require('fs');
// 同步调用
// const data = fs.readFileSync('./download.js');
// console.log(data.toString());
// 异步调用
// fs.readFile('./download.js', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

// 2. 路径
const path = require('path');
// fs.readFile(path.resolve(__dirname, 'download.js'), (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

// 3. 实用工具
// const { promisify } = require('util');
// const readFile = promisify(fs.readFile);
// readFile(path.resolve(__dirname, 'download.js')).then(data => {
//     console.log(data.toString());
// })

// 4. 文件系统的promises
// const fsp = fs.promises;
// fsp.readFile(path.resolve(__dirname, 'download.js')).then(data => {
//     console.log(data.toString());
// }).catch(err => {
//     console.log(err);
// });

// 5. 缓冲器
// const buf1 = Buffer.alloc(10);
// console.log(buf1, buf1.toString());

// const buf2 = Buffer.from('a');
// console.log(buf2, buf2.toString());

// const buf3 = Buffer.from('中');
// console.log(buf3, buf3.toString());

// buf3.write('国');
// console.log(buf3, buf3.toString());

// const buf4 = Buffer.concat([buf2, buf3]);
// console.log(buf4, buf4.toString());

// 6. HTTP
const http = require('http');
const server = http.createServer((req, res) => {
    // res.end('hello world');
    const { url, method, headers } = req;
    if(url === '/' && method === 'GET') {
        fs.readFile(path.resolve(__dirname, './index.html'), (err, data) => {
            console.log(err, data)
            if(err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                });
                res.end('服务器错误');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text-html');
            res.end(data);
        });
    }else if(url === '/user' && method ==='GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ name: 'Tom', age: 24 }));
    }else if(headers.accept.indexOf('image/*') != -1 && method === 'GET') {
        fs.createReadStream(path.resolve(__dirname, './' + url)).pipe(res);
    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('页面不存在');
    }
});
server.listen(3000);