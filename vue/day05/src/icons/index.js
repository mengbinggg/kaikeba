/**
 * require.context是webpack中用于管理依赖的一个函数
 * 
 * 入参：
 *  参数1：要查询的目录
 *  参数2：是否查询子孙目录，默认false
 *  参数3：要匹配的文件
 * 
 * 返回值：一个函数（一个上下文模块，包含指定目录下指定模块的引用）
 *  该函数有三个属性：
 *      1. id：上下文模块的id
 *      2. keys()：数组，各模块的路径的数组
 *      3. resolve()：函数，用于解析模块路径
 *  直接调用该函数：作用与它的resolve属性一样
 */

const contexts = require.context('./svg', false, /\.svg$/);
// console.log(contexts.id)
// console.log(contexts.keys());
// console.log(contexts.resolve('./qq.svg'))
// console.log(contexts('./qq.svg'))
// console.log(contexts.keys().map(contexts))
contexts.keys().map(contexts);