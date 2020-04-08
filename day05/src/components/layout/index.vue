<template>
    <div class="page-wrapper">
        <side-bar class="page-sideBar"></side-bar>
        <div class="page-content">
            <bread-crumb></bread-crumb>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import sideBar from '@/components/sideBar';
    import breadCrumb from '@/components/breadCrumb';
    export default {
        components: {
            sideBar,
            breadCrumb
        }
    }
</script>
