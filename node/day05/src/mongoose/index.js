const mongoose = require('mongoose');

// 连接
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const conn = mongoose.connection;

conn.once('open', async () => {
    // 定义对象结构
    const User = mongoose.Schema({
        name: String,
        age: Number
    });
    // 编译对象
    const user = mongoose.model('user', User);

    try {
        await user.create({
            name: 'Tom',
            age: 13
        });
        console.log('插入成功！');

        let res = await user.find({ name: 'Tom' });
        console.log(res);

        await user.updateOne({
            name: 'Tom'
        }, {
            $set: { age: '18' }
        });

        await user.deleteOne({ age: 13 });
        console.log('删除成功');
    }catch(err) {
        console.log(err);
    }
});