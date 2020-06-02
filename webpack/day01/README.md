#### webpack
> 简介：webpack是一个模块化打包工具。它会从入口文件出发，并识别出其所有的依赖，打包到一个独立的文件中。

##### 安装
```
// 安装webpack V4+版本时，需要额外安装webpack-cli
npm i -D webpack webpack-cli

// 检查安装
npx webpack -v  // npx命令会自动查找当前项目node_modules下的webpack命令，故不用指定webpack路径
./node_modules/.bin/webpack -v
```

##### webpack配置
1. 默认支持类型
    - 默认支持js模块、json模块
    - 默认支持CommonJS、ES6 module、AMD等模块化机制

2. 默认webpack配置文件
```
// webpack.config.js
const path = require("path");
module.exports = {
    entry: "./src/index.js",  // webpack执⾏构建⼊⼝
    // webpack输入文件
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./dist")
    }
};
```

3. 执行webpack命令的方式：
    - 使用npx：npx webpack
    - 指定webpack路径：./node_modules/.bin/webpack
    - 使用脚本：npm run test
    ```
    // 配置package.json
    "scripts": {
        "test": "webpack"
    }
    // 执行脚本
    npm run test

    // npm run运行时会新建一个shell脚本，执行该脚本时会将当前项目下的node_modules/.bin目录加入到path环境变量中
    // 脚本执行结束后，将path恢复原样
    // 因此，通过npm run执行命令时，不需要指定命令所在目录
    ```

##### 核心配置
1. entry：入口文件
```
// 单入口文件
entry: {
    main: './src/index.js'
}
entry: "./src/index.js";  // 简写

// 多入口文件
entry: {
    index: './src/index.js',
    main: './src/main.js'
}
```

2. output：输出文件
```
// 单入口
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
}

// 多入口
output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.resolve(__dirname, './dist')
}
```

3. mode：指定项目构建环境
    - none
    - development：有利于热更新的处理，识别模块变化
    - production（默认）：帮助压缩模块

4. loader：模块解析器（把不认识的module安装指定loader转换为新内容）
    - 常用loader:
        - file-loader: 识别出资源模块，并移动到打包后的指定输出目录
        - url-loader：file-loader的加强版，可以将指定大小的文件转化为base64并输出
        - css-loader: 解析css文件
        - style-loader: 将css文件合并为同一个style标签中，并将style标签放置到页面header部分
        - scss-loader: 将sass/scss文件解析为css文件
        - postcss-loader: 为css属性添加前缀

5. plugin：插件（用于处理loader无法实现的其他事，包括打包、压缩、重新定义环境变量等）
    - 常用plugin：
        - html-webpack-plugin: 用于打包之后自动生成一个HTML文件，并引入打包后的js文件
        - clean-webpack-plugin: 清除已打包文件
        - mini-css-extract-plugin: 提取并压缩css文件

6. devtool: 控制如何生成source map