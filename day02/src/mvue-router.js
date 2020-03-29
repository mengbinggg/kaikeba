import Vue from 'vue';

class MVueRouter {
    constructor(options) {
        this.$options = options;
        this.routesMap = {};  // 存储路由对象
        // 设置动态路由(初始化)
        this.app = new Vue({
            data() {
                return {
                    currentUrl: '/'
                }
            }
        })
    }

    init() {
        this.listenUrlChange();  // 监听url变化
        this.parseRoutesMap();  // 解析路由配置
        this.createComponent();  // 创建路由组件
    }

    listenUrlChange() {
        window.addEventListener('load', this.urlHashChange.bind(this));
        window.addEventListener('hashchange', this.urlHashChange.bind(this));
    }

    urlHashChange() {
        this.app.currentUrl = window.location.hash.slice(1) || '/';
    }

    parseRoutesMap() {
        this.$options.routes.forEach(item => {
            this.routesMap[item.path] = item.component;
        });
    }

    createComponent() {
        Vue.component('router-link', {
            props: {
                to: {
                    type: String,
                    required: true 
                }
            },
            render(h) {
                return h('a', 
                    { attrs: { href: '#' + this.to } }, 
                    [this.$slots.default]
                )
            }
        });

        Vue.component('router-view', {
            render: h => {
                const component = this.routesMap[this.app.currentUrl];
                return h(component);
            }
        });
    }
}

MVueRouter.install = function(Vue) {
    // 混入MVueRouter的初始化方法
    Vue.mixin({
        beforeCreate () {
            if(this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        },
    });
}

export default MVueRouter;