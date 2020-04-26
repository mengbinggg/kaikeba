class Router {
    constructor() {
        this.stack = [];
    }

    get(path, middleware) {
        this.stack.push({
            path, 
            method: 'get',
            middleware
        });
    }

    post(path, middleware) {
        this.stack.push({
            path, 
            method: 'post',
            middleware
        });
    }

    routes() {
        const stack = this.stack;
        return async function(ctx, next) {
            const method = ctx.method.toLowerCase();
            const url = ctx.url;
            let route, i = 0, item;

            for(i; i < stack.length; i++) {
                item = stack[i];
                if(item.path === url && item.method === method) {
                    route = item.middleware;
                }
            }

            if(typeof route === 'function') {
                route(ctx);
            }
            await next();
        }
    }

}

module.exports = Router;