const api = require('./api');
const proxy = require('./proxy');

api.listen(4000, () => {
    console.log('api server listen on 4000...');
});

proxy.listen(3000, () => {
    console.log('proxy server listen on 3000...');
});