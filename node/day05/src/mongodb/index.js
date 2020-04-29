(async () => {
    const { MongoClient } = require('mongodb');

    // 创建客户端并连接
    const client = new MongoClient('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await client.connect();

    const db = client.db('test1');  // 创建数据库
    const user = db.collection('user');  // 创建集合

    // 添加文档
    await user.insertOne({
        name: 'Rose',
        age: 32
    });
    console.log('插入成功');

    // 查询文档
    let res = await user.findOne();
    console.log('查询结果：', res);

    // 更新文档
    await user.updateOne({
        name: 'Rose'
    }, {
        $set: {
            age: 12
        }
    });
    console.log('更新成功');

    // 删除文档
    // await user.deleteMany({
    //     age: 32
    // });
    // console.log('删除成功');

    // await user.deleteMany();
    // console.log('全部删除');

    client.close();
})();