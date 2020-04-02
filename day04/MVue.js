class MVue {
    constructor(option) {
        this.$option = option;
        this.$vm = this;
        this.$data = option.data;
        this.$el = document.querySelector(option.el);

        this.observe(this.$data);
        this.bindData(this.$data);

        new Compile(this);  // 编译模板

        if(option.created) {
            option.created.call(this);
        }
    }

    // 添加属性监听
    observe(data) {
        if(typeof data !== "object") {
            return
        }

        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
        });
    }

    // 定义数据响应
    defineReactive(obj, key, val) {
        this.observe(val);  // 循环遍历data中的对象元素

        var sub = new Subject();

        Object.defineProperty(obj, key, {
            get: () => {
                Subject.observer && sub.addObserve(Subject.observer);
                return val;
            },
            set: (newVal) => {
                if(newVal !== val) {
                    val = newVal;
                    sub.notify();
                }
            }
        });
    }

    // 将$data中的数据绑定到Vue实例上
    bindData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get: () => {
                    return data[key];
                },
                set: (newVal) => {
                    if(newVal !== data[key]) {
                        data[key] = newVal;
                    }
                }
            });
        });
    }
}

// 定义被观察者对象(目标对象)
class Subject {
    constructor() {
        this.observes = [];
    }

    addObserve(observe) {
        this.observes.push(observe);
    }

    notify() {
        this.observes.forEach(o => {
            o.update();
        });
    }
}

// 定义观察者对象
class Observe {
    constructor(vm, key, callback) {
        this.vm = vm;
        this.key = key;
        this.callback = callback;

        // 将观察者绑定到目标对象
        Subject.observer = this;
        let data = vm.$data;
        key.split(".").forEach(item => {
            data = data[item];
        })
        Subject.observer = null;
    }

    update() {
        let data = this.vm.$data;
        this.key.split(".").forEach(item => {
            data = data[item];
        })
        this.callback(data);
    }
}