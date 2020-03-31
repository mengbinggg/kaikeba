import Vue from 'vue';
import MVuex from './mvuex';

Vue.use(MVuex);

const store = new MVuex.store({
    state: {
        count: 1
    },
    getters: {
        getCount: state => {
            return state.count + 10;
        }
    },
    mutations: {
        add(state, n) {
            state.count += n;
        }
    },
    actions: {
        addFun({commit}, n) {
            commit('add', n);
        }
    }
});

export default store;