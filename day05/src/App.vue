<template>
  <div id="app">
    <svg-icon className="qq" @click="clickIcon"></svg-icon>
    <svg-icon className="weixin"></svg-icon>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    clickIcon() {
      console.log("图标点击了")
    }
  },
}
</script>

<style>

</style>
