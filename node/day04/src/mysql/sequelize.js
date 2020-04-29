(async () => {
    const Sequelize = require('sequelize');
    // 连接数据库
    const sequelize = new Sequelize('test', 'root', 'mb1234', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false
    });

    // 定义模型
    const User = sequelize.define('User', {
        id: { type:Sequelize.DataTypes.UUID, defaultValue: Sequelize.DataTypes.UUIDV1, primaryKey: true },
        name: { type: Sequelize.STRING(20), allowNull: false },
        age: { type: Sequelize.INTEGER, allowNull: true, get() { return this.getDataValue('age') + '岁' } },
        sex: { type: Sequelize.STRING(4), defaultValue: '男' }
    }, {
        timestamps: false,  // 不生成时间戳
        freezeTableName: true,  // 设置表名为单数
        // tableName: 'MUser'  // 为表指定别名
    });

    // 同步数据库
    let res = await User.sync({
        force: true  // 删除原有表结构
    });

    // 插入
    await User.create({
        name: 'Jack',
        age: 24
    });

    // 查找
    // res = await User.findAll();
    // console.log(res);

    res = await User.findAll({
        where: {
            age: { [Sequelize.Op.gt]: 10, [Sequelize.Op.lt]: 30 }
        }
    });
    console.log(res);

    // 更新
    // await User.update({
    //     age: 20
    // }, {
    //     where: { name: 'Tom' }
    // });

})();