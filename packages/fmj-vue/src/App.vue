<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>

import Layout from './components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}

#app {
  text-align: center;
  color: #2c3e50;
}
</style>
