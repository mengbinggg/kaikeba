const fs = require('fs');
const path = require('path');

// 获取值
function get(key) {
    fs.readFile(path.resolve(__dirname, './db.json'), (err, data) => {
        if(data.toString()) {
            const json = JSON.parse(data);
            console.log(json[key]);
        }
    });
}

// 设置值
function set(key, value) {
    fs.readFile(path.resolve(__dirname, './db.json'), (err, data) => {
        let json = data.toString() ? JSON.parse(data) : {};
        json[key] = value;
        fs.writeFile(path.resolve(__dirname, './db.json'), JSON.stringify(json), (err, data) => {
            console.log('写入成功！');
        });
    });
}

const readLine = require('readline');
const rf = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rf.on('line', input => {
    const [option, key, value] = input.split(' ');
    if(option == 'get') {
        get(key);
    }else if(option == 'set') {
        set(key, value);
    }else if(option == 'close') {
        rf.close();
    }else {
        console.log('操作不正确');
    }
});

rf.on('close', () => {
    console.log('进程关闭');
    process.exit(0);
});