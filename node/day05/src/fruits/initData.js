const mongodb = require('./models/db');

mongodb.once('connect', async () => {
    const fruits = mongodb.collection('fruits');

    await fruits.deleteMany();

    // 插入数据
    let data = new Array(100).fill().map((item, index) => {
        return {
            name: 'xxx' + index,
            price: index,
            category: Math.random() > 0.5 ? '水果' : '蔬菜'
        }
    });
    await fruits.insertMany(data);
    console.log('插入成功');
});