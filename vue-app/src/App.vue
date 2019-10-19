<template>
  <div id="app">
    <img src="./assets/logo.png">
    <cube-button :primary="true">Primary Button</cube-button>
    <router-view />
  </div>
</template>

<script>
import {Button} from 'cube-ui'

export default {
  name: 'App',
  components: {
    [Button.name]: Button
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
