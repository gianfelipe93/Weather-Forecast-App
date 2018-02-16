import axious from 'axios'

const API_KEY = 'e9cb2f813741a0ca5b8e308d0d06e412'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`
    const request = axious.get(url)
        

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}