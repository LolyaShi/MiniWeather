<template>
  <Header />

  <CustomLayout>
    <router-view />
  </CustomLayout>
</template>

<script>

import Header from './components/Header'
import CustomLayout from '@/components/MainLayout.vue'
import {defineComponent} from 'vue'

export default defineComponent( {
  name: 'App',
  components: {
    Header,
    CustomLayout
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
  margin-top: 60px;
}
</style>
