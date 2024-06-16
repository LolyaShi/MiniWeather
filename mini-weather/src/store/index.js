import { getData } from "@/api";
import { defineStore } from "pinia";


export const useWeatherStore = defineStore({
    id: 'weather',
    state: () => ({
        city: '',
        weatherData: null
    }),
    actions: {
        async getWeatherData(city){
            const response = await getData(city);
            this.weatherData = response.data;
            this.city = city;
            console.log(this.weatherData)
        }
    }
})