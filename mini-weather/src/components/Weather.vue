<template>
  <main :id="[time > 17 ? 'night' : '']">
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
            {{myData}}
          </div>
        </div>
        <div class="weather-data">
          <div class="temperature">{{ Math.round(weather.main.temp-273) }} &deg;C</div>
          <div class="feels-like">Feels like {{ Math.round(weather.main.feels_like-273) }} &deg;C</div>
        </div>
        <div class="temp">
          <div class="temp-item">Min: 
            <div>
              {{ Math.round(weather.main.temp_min-273) }} &deg;C
            </div>
         </div>
          <div class="temp-item">Max: 
            <div>
              {{ Math.round(weather.main.temp_max-273) }} &deg;C
            </div>
          </div>
          
        </div>
        <div class="sunTime">
            <div class="sunrise">Sunrise {{ getSunTime(weather.sys.sunrise)}}</div>
            <div class="sunset">Sunset {{ getSunTime(weather.sys.sunset) }}</div>
        </div>
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
      city.value = ''
    }

    const myData = new Date().toDateString();
    const time = new Date().getHours();
  
    const getSunTime = (time) => {
      let sunTime =  new Date(time * 1000);
      let hour = sunTime.getHours(); 
      let minute = sunTime.getMinutes();
      if(sunTime.getHours() < 10){
        hour = `0${sunTime.getHours() }`
      }
      if(sunTime.getMinutes() < 10){
        minute = `0${sunTime.getMinutes() }`
      }
      return `${hour}:${minute}`
      
    }

    return {
      city,
      weather,
      fetchData,
      myData,
      time,
      getSunTime
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  main{
    width: 100%;
    height: 100vh;
    background: url("../../public/img/b5.jpg") no-repeat center center fixed;
    background-size: cover;
    padding: 10px 0;
  }

  #night{
    width: 100%;
    height: 100vh;
    background: url("../../public/img/b4.jpg") no-repeat center center fixed;
    background-size: cover;
  }

  .searchbox{

  }
  .searchbox input{
    margin-top: 20px;
    width: 200px;
    font-size: 20px;
    line-height: 26px;
    padding: 5px 10px;
    border-radius: 15px 0 15px 0;
    border: solid 1px #7b2bfc;
  }
  input:focus{
    outline: none;
    box-shadow: 0 0 10px #7b2bfc;
  }
  .weather-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .weather-data{
    width: 70%;
    padding: 20px;
    border-radius: 15px;
    background-color: #fff;
    color: rgb(16, 16, 110);
    font-size: 36px;
    line-height: 40px;
    font-weight: 800;
    margin-top: 30px;
  }

  .location{
    color: #fff;
    font-size: 26px;
    line-height: 28px;
    margin-top: 10px;
    padding: 10px 15px;
    border-radius: 15px;
    background-color: rgba(84, 84, 207, 0.498);
  }
  .feels-like{
    font-size: 23px;
    line-height: 28px;
    margin-top: 5px;
    font-weight: 400;
  }
  .timezone{
    font-size: 20px;
    line-height: 25px;
    
  }
  .temp{
    display: flex;
    justify-content: center;
    width: 80%;
    margin-top: 30px;
    padding: 0 -6px;
  }
  .temp-item{
    flex: 0 1 50%;
    border-radius: 15px;
    background-color: rgba(84, 84, 207, 0.498);
    color: #fff;
    font-size: 22px;
    line-height: 26px;
    padding: 10px 0;
    margin: 0 3px;
  }

  .sunTime{
    width: 80%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    padding: 0 -6px;
  }
  .sunrise, .sunset{
    flex: 0 1 50%;
    border-radius: 15px;
    background: rgba(84, 84, 207, 0.498);
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    padding: 10px;
    margin: 0 3px;
  }

</style>
