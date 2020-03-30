<template>
  <div id="app">
    <div>count: {{count}}</div>
    <div>getCount: {{getCount}}</div>
    <div>
      <button @click="addCount">count值加</button>
      <button @click="reduceCount">count值减</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapActions(['addFun', 'reduceFun']),
    addCount() {
      // this.$store.commit("add");
      // this.$store.dispatch("addFun", 2);
      this.addFun(2);
    },
    reduceCount() {
      // this.$store.commit("reduce");
      this.$store.dispatch("reduceFun", 2);
    }
  },
}
</script>

<style>

</style>
