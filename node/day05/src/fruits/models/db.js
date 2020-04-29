const conf = require('./conf');
const EventEmitter = require('events').EventEmitter;
const { MongoClient } = require('mongodb');

class Mongodb {
    constructor(conf) {
        this.conf = conf;
        this.emitter = new EventEmitter();
        this.client = new MongoClient(conf.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.client.connect(() => {
            console.log('数据库连接成功');
            this.emitter.emit('connect');
        });
    }

    // 获取集合
    collection(collectionName, dbName = conf.dbName) {
        return this.client.db(dbName).collection(collectionName);
    }

    // 注册事件
    once(eventName, callback) {
        this.emitter.once(eventName, callback);
    }
}

module.exports = new Mongodb(conf);