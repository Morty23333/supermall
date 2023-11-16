<template>
  <div id="app">
    <router-view></router-view>
   <Maintabbar></Maintabbar>
  </div>
</template>

<script>
import Maintabbar from "./components/content/maintabbar/maintabbar.vue";

export default {
  name: 'App',
  components: {
    Maintabbar
  }
}
</script>

<style>

@import "./assets/css/base.css"

</style>
