<template>
  <div id="app">
    <img src="./assets/logo.png">
    <md-button type="primary">Primary</md-button>
    <router-view />
  </div>
</template>

<script>
import { Button } from 'mand-mobile'

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
