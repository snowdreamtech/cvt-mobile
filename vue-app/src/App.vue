<template>
  <div id="app">
    <img src="./assets/logo.png">
    <x-button type="primary">primary</x-button>
    <router-view />
  </div>
</template>

<script>
import { XButton } from 'vux'

export default {
  name: 'App',
  components: {
    XButton
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="less">
@import "~vux/src/styles/reset.less";
</style>
