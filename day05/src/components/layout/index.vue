<template>
    <div class="page-wrapper">
        <side-bar class="page-sideBar"></side-bar>
        <div class="page-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import sideBar from '@/components/sideBar';
    export default {
        components: {
            sideBar
        }
    }
</script>
<style scoped>
.page-wrapper {
    display: flex;
    height: 100%;
    margin: 20px;
}
.page-sideBar {
    width: 300px;
}
.page-content {
    flex: 1;
}
</style>
