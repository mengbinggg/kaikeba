import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        getCount(state) {
            return state.count + 10;
        }
    },
    mutations: {
        add(state, n) {
            // mutations中不能通过异步方法修改state的值，程序不会报错，但是devtool无法追踪state、getters的变化
            // setTimeout(()=>{
            //     state.count += n;
            // }, 1000)
            state.count += n;
        },
        reduce(state, n) {
            state.count -= n;
        }
    },
    // 为了解决mutations中不能使用异步方法，从而新增了action方式来触发事件
    actions: {
        addFun(context, n) {
            context.commit("add", n);
        },
        // {commit}和context的效果是一样的，{commit}是解构
        reduceFun({commit}, n) {
            commit("reduce", n);
        }
    }
});

export default store;