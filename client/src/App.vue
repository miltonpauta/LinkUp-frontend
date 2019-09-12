<template>
  <div id="app">
    <PageHeader/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/shared/layout/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>

body{
  margin:0; 
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Questrial', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.button:hover,
.button:active{
  font-weight: bold; 
}

/* animation for page changes */


</style>
