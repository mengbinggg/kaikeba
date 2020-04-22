<template>
    <ul class="treeRootBox">
        <m-tree-item  :treeData="treeData"></m-tree-item>
    </ul>
</template>

<script>
    import MTreeItem from '@/components/MTree/MTreeItem.vue';
    export default {
        components: {
            MTreeItem
        },
        props: {
            treeData: {
                type: Object,
                required: true
            }
        },
        mounted () {
            console.log(this.treeData);
        },
    }
</script>

<style scoped>

</style>