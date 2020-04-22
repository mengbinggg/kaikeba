<template>
    <div>
        <ul class="sideBar">
            <sideBar-item v-for="(route, index) in routes" :key="route.path + '_' + index" :model='route' :base-path='route.path'></sideBar-item>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import sideBarItem from './sideBarItem'

    export default {
        components: {
            sideBarItem,
        },
        computed: {
            ...mapGetters([
                'routes',
            ])
        }
    }
</script>

<style scoped>

</style>
