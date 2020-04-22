import MsgBox from './MsgBox.vue';
import Vue from 'vue';

export default function(component, property) {
    const vm = new Vue({
        render(h) {
            return h(component, {
                props: property
            });
        }
    }).$mount();

    document.body.appendChild(vm.$el);

    // 销毁组件
    var comp = vm.$children[0];
    comp.destroy = function() {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp;
}