<template>
    <li class="sideBar__item" v-if="!model.hidden">
        <div class="menu" @click="expendNode">
            <template v-if="isFolder">
                <svg-icon v-if="model.meta && model.meta.icon" :className="model.meta.icon"></svg-icon>
                <span v-if="model.meta && model.meta.title" class="menu__title">{{model.meta.title}}</span>
                <span class="menu__btn">{{expand ? '-': '+'}}</span>
            </template>
            <template v-else>
                <router-link :to='resolvePath(model.path)'>{{model.meta && model.meta.title}}</router-link>
            </template>
        </div>
        <ul class="subMenu" v-if="model.children" v-show="expand">
            <sideBar-item v-for="(route, index) in model.children" :key="route.path + '_' + index" :model='route' :base-path='model.path'></sideBar-item>
        </ul>
    </li>
</template>

<script>
    import path from 'path';
    export default {
        name: 'sideBarItem',
        props: {
            model: {
                type: Object,
                required: true
            },
            basePath: {
                type: String,
                default: ''
            }
        },
        computed: {
            isFolder() {
                return this.model.children;
            }
        },
        data() {
            return {
                expand: this.model.expand || false
            }
        },
        methods: {
            expendNode() {
                this.expand =  !this.expand;
            },
            resolvePath(currentPath) {
                return path.resolve(this.basePath, currentPath);
            }
        }
    }
</script>

<style scoped>
.menu {
    cursor: pointer;
}
.sideBar__item {
    margin-left: 20px;
}
</style>