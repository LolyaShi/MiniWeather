<template>
  <div class="main">
    <Weather />
  </div>
  
</template>

<script>
import {defineComponent} from 'vue'
import Weather from './Weather'
export default defineComponent( {
  name: 'Main',
  components: {
    Weather
  },

  setup(){

    return {

    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    width: 100%;
    height: 100vh;
    background: url("../../public/img/b2.jpg") no-repeat center center fixed;
    background-size: cover;
  }
</style>
