<template>
  <main>
    <div class="searchbox">
      <input
       type="text"
       id="city"
       placeholder="Searching..."
       class="search-bar"
       v-model="city"
       @keyup.enter="fetchData"
      >

    </div>
    <div v-if="weather?.main" class="weather-container">
        <div class="location">
          {{ weather?.name }} - {{ weather.sys.country }}
          <div class="timezone">

          </div>
        </div>
        <div class="weather-data"></div>
    </div>
  </main>
</template>

<script>
import {defineComponent, ref, computed} from 'vue'
import {useWeatherStore} from '@/store'
export default defineComponent( {
  name: 'Weather',

  setup(){

    const city = ref('')
    const store = useWeatherStore()
    const weather = computed(() => store.weatherData)

    function fetchData(){
      store.getWeatherData(city.value)
      console.log(city.value)
      console.log(weather)
    }


    return {
      city,
      weather,
      fetchData
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
