const express = require('express');
const path = require('path');
const mongo = require('./models/db');

const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/api/fruits', async (req, res) => {
    const { page, category, keyword } = req.query;
    const condition = {
        category,
        name: {
            $regex: new RegExp(keyword)
        }
    };
    const fruits = mongo.collection('fruits');
    const total = await fruits.find(condition).count();
    const list = await fruits.find(condition).skip((page - 1) * 10).limit(10).toArray();
    res.json({
        ok: 1,
        data: {
            list,
            total
        }
    })
});

app.listen(3000, () => {
    console.log('程序启动成功...');
});