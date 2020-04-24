function compose(middleWares) {
    return function() {
        return executeFn(0);

        function executeFn(i) {
            let fn = middleWares[i];
            if(!fn) {
                return Promise.resolve();
            }
            return Promise.resolve(
                fn(function() {
                    return executeFn(i + 1);
                })
            );
        }
    };
}


// 实现
async function fn1(next) {
    console.log('fn1 start...');
    await delay();
    await next();
    console.log('fn1 end...');
}

async function fn2(next) {
    console.log('fn2 start...');
    await delay();
    await next();
    console.log('fn2 end...');
}

function fn3() {
    console.log('fn3');
}

function delay() {
    return new Promise(resolve => {
        setTimeout(function(){
            resolve();
        }, 2000);
    });
}

const fn = compose([fn1, fn2, fn3]);
fn();