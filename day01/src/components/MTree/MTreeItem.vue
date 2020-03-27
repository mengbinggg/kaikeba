<template>
    <li class="treeItemBox">
        <div class="treeItem" @click="expendNode">
            <span class="treeItem__title">{{treeData.title}}</span>
            <span v-if="treeData.children" class="treeItem__btn">{{expand ? '-': '+'}}</span>
        </div>
        <ul class="treeBox" v-if="treeData.children" v-show="expand">
            <m-tree-item  v-for="(childNodes, index) in treeData.children" :key="index" :treeData="childNodes"></m-tree-item>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'MTreeItem',
        props: {
            treeData: {
                type: Object,
                reuired: true
            }
        },
        data() {
            return {
                expand: this.treeData.expand || false
            }
        },
        methods: {
            expendNode() {
                this.expand =  !this.expand;
            }
        },
    }
</script>

<style scoped>
.treeItem {
    cursor: pointer;
}
</style>