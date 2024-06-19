<template>
  <header>
    <div class="logo">
      <router-link to="/main">
        <img src="logo.svg" alt="logo">
      </router-link>
    </div>
    <nav>
      <router-link to="/main" class="link">Main</router-link>
      <a class="link" @click="goToAbout" href="#">About</a>
    </nav>
  </header>
</template>

<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent( {
  name: 'Header',

  setup(){

    const router = useRouter();

    const goToAbout = () => {
      router.push({name: 'About'})
    }

    return {
      goToAbout
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: rgba(101, 44, 200, 0.377);
    position: relative;
    z-index: 2;
  }
  a{
    text-decoration: none;
  }
  .link{
    font-size: 18px;
    margin-right: 2vmax;
    font-weight: 700;
    color: #fff;
  }
  .logo{
    max-width: 80px;
  }
  .logo img{
    width: 100%;
    height: auto
  }
</style>
