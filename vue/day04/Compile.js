class Compile {
    constructor(vm) {
        this.$vm = vm;
        if(vm.$el) {
            let fragment = this.node2Fragment(vm.$el);
            this.compile(fragment);
            
            // 将编译结果追加到el标签中
            vm.$el.appendChild(fragment);
        }
    }

    // 将html结构转化为代码片段
    node2Fragment(el) {
        let fragment = document.createDocumentFragment();
        let child = el.firstChild;
        while(child) {
            fragment.appendChild(child);
            child = el.firstChild;
        }
        return fragment;
    }

    // 编译代码片段
    compile(fragment) {
        var childNodes = fragment.childNodes;

        Array.from(childNodes).forEach(node => {
            // 判断节点类型
            if(node.nodeType == 1) {  // 元素节点
                this.compileElement(node);
            }else if(this.isInterpolation(node)) {  // 插值文本
                this.compileInterpol(node);
            }

            // 递归编译节点子元素
            if(node.childNodes && node.childNodes.length > 0) {
                this.compile(node);
            }
        });
    }

    // 判断是否为插值文本
    isInterpolation(node) {
        let reg = /\{\{(.*)\}\}/g;
        return node.nodeType == 3 && reg.test(node.textContent);
    }

    // 编译插值文本（将插值替换为具体值）
    compileInterpol(node) {
        var exp = RegExp.$1;
        this.textUpdater(node, exp);
    }

    // 获取data中指定key的值
    getData(key) {
        let data = this.$vm.$data;
        key.split('.').forEach(key => {
            data = data[key];
        })
        return data
    }

    // 设置data中指定key的值
    setData(key, value) {
        let data = this.$vm.$data;
        key.split('.').forEach(key => {
            if(typeof data[key] === 'object') {
                data = data[key];
                return
            }
            data[key] = value;
        });
    }

    // 更新文本，并注册观察者
    textUpdater(node, key) {
        node.textContent = this.getData.call(this, key);

        // 注册观察者，并绑定到目标对象
        new Observe(this.$vm, key, function(data) {
            node.textContent = data;
        });
    }

    // 编译元素
    compileElement(node) {
        let attributes = node.attributes;
        Array.from(attributes).forEach(attr => {
            let attrName = attr.name;
            let attrValue = attr.value;

            // 执行指令
            if(attrName.indexOf('m-') == 0) {
                let type = attrName.substr(2);
                this[type+"Updater"](node, attrValue);
            }

            // 执行事件
            if(attrName.indexOf('@') == 0) {
                let type = attrName.substr(1);
                this.eventHandle(node, type, attrValue);
            }
        });
    }

    // 数据双向绑定
    modelUpdater(node, key) {
        node.value = this.getData.call(this, key);
        node.addEventListener("input", e => {
            let val = e.target.value;
            this.setData.call(this, key, val);
        });

        // 注册观察者，并绑定到目标对象
        new Observe(this.$vm, key, function(data) {
            node.value = data;
        });
    }

    // html代码替换
    htmlUpdater(node, key) {
        node.innerHTML = this.getData.call(this, key);
        
        // 注册观察者，并绑定到目标对象
        new Observe(this.$vm, key, function(data) {
            node.innerHTML = data;
        });
    }

    // 添加事件处理
    eventHandle(node, eventType, fnName) {
        if(this.$vm.$option.methods && this.$vm.$option.methods[fnName]) {
            node.addEventListener(eventType, this.$vm.$option.methods[fnName].bind(this.$vm));
        }
    }
}