const title = "vue项目最佳实践"
const path = require("path")

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: './',
    devServer: {
        port: 8081
    },
    configureWebpack: {
        name: title
    },
    chainWebpack: config => {
        // 排除原有svg配置规则中指定路径
        config.module.rule("svg")
        .exclude.add(resolve("src/icons"));

        // 添加icons配置规则，并指定路径
        config.module.rule("icons")
        .test(/\.svg$/).include.add(resolve("src/icons")).end()
        .use("svg-sprite-loader").loader("svg-sprite-loader").options({ symbolId: "icon-[name]" }).end();
    }
}