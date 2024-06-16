<template>
  <header>
    <div class="logo">
      <router-link to="/main">
        <img src="" alt="">
      </router-link>
    </div>
    <nav>
      <router-link to="/main">Main</router-link>
      <a @click="goToAbout" href="#">About</a>
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
    justify-content: space-between;
    align-items: center
  }
  a{
    text-decoration: none;
  }
</style>
