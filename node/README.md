#### 项目列表
1. day01: node基本操作
2. mb-vue-cli: npm编写自定义脚手架工具

3. day02: koa基本操作
4. mb-koa: 手写koa源码

5. day03: 网络编程
6. day04: node实现数据持久化 - mysql
7. day05: node实现数据持久化 - mongodb



#### node中常用第三方模块：
1. ora
> 是一个终端旋转器，用于在终端提示信息
```
const ora = require('ora');

const spinner = ora({
    text: 'Loading unicorns'
}).start();

setTimeout(() => {
    // spinner.succeed('成功')
    // spinner.fail('失败')
    // spinner.warn('警告')
    spinner.info('信息')
}, 1000);
```

2. download-git-repo
> 用于从node中下载git仓库
```
const download = require('download-git-repo');

download('github:su37josephxia/vue-template', './dist', (err) => {
    if(err) console.log(err)
})
```

3. 