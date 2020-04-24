const http = require('http');
const context = require('./context');

class MKoa {
    constructor() {
        this.middleWares = [];
    }

    use(middleWare) {
        this.middleWares.push(middleWare);
    }

    listen(...args) {
        http.createServer(async (req, res) => {
            const ctx = this._createContext(req, res);
            await this._compose(this.middleWares)(ctx);
            res.end(ctx.body);
        }).listen(...args);
    }

    // 构建ctx上下文对象
    _createContext(req, res) {
        let ctx = Object.create(context);
        ctx.request = req;
        ctx.response = res;
        return ctx;
    }

    // 合成函数
    _compose(middleWares) {
        return function(ctx) {
            return executeFn(0);
    
            function executeFn(i) {
                let fn = middleWares[i];
                if(!fn) {
                    return Promise.resolve();
                }
                return Promise.resolve(
                    fn(ctx, function() {
                        return executeFn(i + 1);
                    })
                );
            }
        };
    }
}

module.exports = MKoa;