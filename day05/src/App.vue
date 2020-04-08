<template>
  <div id="app">
    <svg-icon className="qq" @click="clickIcon"></svg-icon>
    <svg-icon className="weixin"></svg-icon>

    <div>
      <router-link to='/'>首页</router-link>
      <router-link to='/about'>关于</router-link>
      <router-link to='/login'>登录</router-link>
    </div>
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
