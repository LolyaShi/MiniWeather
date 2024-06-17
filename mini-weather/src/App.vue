<template>
  <div class="container">
    <Header />

    <router-view />

  </div>
  
</template>

<script>

import Header from './components/Header'

import {defineComponent} from 'vue'

export default defineComponent( {
  name: 'App',
  components: {
    Header,
  
  },

  setup(){
    return{

    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.container{
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
