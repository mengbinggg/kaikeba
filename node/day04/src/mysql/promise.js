(async () => {
    const mysql = require('mysql2/promise');
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mb1234',
        database: 'test'
    });

    // 创建表
    await conn.execute(`create table if not exists user (
        id int not null auto_increment,
        name varchar(45) not null,
        primary key(id)
    )`);

    // 表中插入数据
    await conn.execute(`insert into user(name) value(?)`, ['Jack']);

    // 查询表中数据
    let [rows, fields] = await conn.query(`select * from user`);
    console.log('result data: ', rows);
})();