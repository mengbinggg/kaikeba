<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    clickIcon() {
      console.log("图标点击了")
    }
  },
}
</script>

<style>

</style>
