<template>
  <div id="app">
    <!-- 使用vuex测试代码 -->
    <!-- <div>count: {{count}}</div>
    <div>getCount: {{getCount}}</div>
    <div>
      <button @click="addCount">count值加</button>
      <button @click="reduceCount">count值减</button>
    </div> -->

    <div>count: {{$store.state.count}}</div>
    <div>getCount: {{$store.getters.getCount}}</div>
    <div>
      <button @click="addCount">count值加</button>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {
    // ...mapState(['count']),
    // ...mapGetters(['getCount'])
  },
  methods: {
    // 使用vuex测试代码
    // ...mapActions(['addFun', 'reduceFun']),
    // addCount() {
    //   // this.$store.commit("add");
    //   // this.$store.dispatch("addFun", 2);
    //   this.addFun(2);
    // },
    // reduceCount() {
    //   // this.$store.commit("reduce");
    //   this.$store.dispatch("reduceFun", 2);
    // }

    addCount() {
      // this.$store.commit("add", 3);
      this.$store.dispatch("addFun", 2);
    }
  },
}
</script>

<style>

</style>
