<template>
  <div class="about">
    <h2>About us</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo reprehenderit commodi, vel quaerat nihil ad ipsa aliquid animi architecto? Hic assumenda necessitatibus numquam sed, rem cumque aliquid facilis rerum quae.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, est.</p>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent( {
  name: 'About',

  setup(){

    return {

    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about{
    background-color: blue;
    color: #fff;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
