const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    const { url, method } = req;
    if(url === '/' && method === 'GET') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }else if(url === '/user' && method === 'GET') {
        // res.setHeader('Access-Control-Allow-Credentials', 'true');
        // res.setHeader('Set-Cookie', 'cookieName=mm123');

        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            name: 'Tom',
            age: 25
        }));
    }else if(url === '/user' && method === 'OPTIONS') {
        // res.setHeader('Access-Control-Allow-Credentials', 'true');
        // res.writeHead(200, {
        //     'Access-Control-Allow-Origin': 'http://localhost:3000',
        //     'Access-Control-Allow-Headers': 'X-Token, Content-Type'
        // });
        // res.end();
    }else if(url === '/user' && method === 'POST') {
        let resData = [];
        req.on('data', data => {
            resData.push(data);
        });
        req.on('end', () => {
            res.end(resData.toString());
        })
    }
});

module.exports = app;