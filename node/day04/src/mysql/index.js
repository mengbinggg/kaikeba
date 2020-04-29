const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mb1234',
    database: 'test'
});
conn.connect(() => {
    console.log('数据库连接成功...');
});

// 创建表
conn.query(`create table if not exists user (
    id int not null auto_increment,
    name varchar(45) not null,
    primary key(id)
)`, (err, data) => {
    console.log('table create success');
});

// 表中插入数据
conn.query(`insert into user(name) value(?)`, 'Tom', (err, data) => {
    console.log('data insert success');
});

// 查询表中数据
conn.query(`select * from user`, (err, data) => {
    console.log('result data: ', data);
})