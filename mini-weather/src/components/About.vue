<template>
  <div class="wrapper">
   
    <div class="about">
      <h2>About us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo reprehenderit commodi, vel quaerat nihil ad ipsa aliquid animi architecto? Hic assumenda necessitatibus numquam sed, rem cumque aliquid facilis rerum quae.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, est.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
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
  .wrapper{
    position: relative;
    background: url(../../public/back.jpg) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
  }
 /* .back{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    object-fit: cover;
  }*/
  .about{
    color: #fff;
    position: relative;
    z-index: 2;
    text-align: left;
    padding: 20px;
    background: #907af385;
    margin: 0 20px 20px;
    
  }
</style>
