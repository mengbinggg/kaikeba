// 使用node内置模块
const os = require('os');
const rate = (os.freemem / os.totalmem * 100).toFixed(2) + '%';
console.log(rate);

// 使用第三方模块
const download = require('download-git-repo');
const ora = require('ora');
const process = ora('下载中...').start();
download('github:su37josephxia/vue-template', '../test', err => {
    if(err) {
        process.fail();
    }else {
        process.succeed();
    }
});

// 封装下载工具
const { clone } = require('./download');
clone('github:su37josephxia/vue-template', '../test');