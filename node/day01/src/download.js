const ora = require('ora');
const { promisify } = require('util');  // promisify用于将遵循错误优先回调风格的函数，promise化
const download = promisify(require('download-git-repo'));

async function clone(repo, dist) {
    const process = ora('下载中...').start();
    try {
        await download(repo, dist); 
    }catch(err) {
        process.fail();
    }
    process.succeed();
}

module.exports = {
    clone
};