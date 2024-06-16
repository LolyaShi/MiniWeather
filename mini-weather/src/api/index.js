import axios from "axios";

const API_KEY = "f122b98e0828b2240531c72c18d33f3f";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export function getData(city){
    const response = axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    return response;
}