<template>
  <Weather />
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

</style>
