import Vue from 'vue';

function install(Vue) {
    Vue.mixin({
        beforeCreate () {
           if(this.$options.store) {
               Vue.prototype.$store = this.$options.store;
           }
        },
    })
};

class store {
    constructor(options) {
        this.state = new Vue({
            data: options.state || {}
        })

        this.mutations = options.mutations || {};
        this.actions = options.actions || {};
        this.commit = this.commit.bind(this);

        options.getters && this.handleGetter(options.getters);
    }
    
    commit(type, arg) {
        if(this.mutations[type]) {
            this.mutations[type](this.state, arg);
        }
    }

    dispatch(type, arg) {
        if(this.actions[type]) {
            this.actions[type]({ 
                commit: this.commit,
                state: this.state
            }, arg)
        }
    }

    handleGetter(getters) {
        this.getters = {};
        for(let item in getters) {
            Object.defineProperty(this.getters, item, {
                get: () => getters[item](this.state)
            })
        }
    }
    
};

export default { install, store };