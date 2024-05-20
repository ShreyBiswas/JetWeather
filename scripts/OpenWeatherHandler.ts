
import OpenWeatherMap from 'openweathermap-ts';
import { CurrentResponse } from 'openweathermap-ts/dist/types';


export class OpenWeatherHandler {
    private apiKey: string;
    private handler: OpenWeatherMap;

    public currentWeatherData: {[city: string]: CurrentResponse}; // pythonic dictionary

    public forecast5Day: any;


    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.handler = new OpenWeatherMap({apiKey: this.apiKey})

        this.handler.setLanguage('en');
        this.handler.setUnits('metric');



        this.currentWeatherData = {}
        this.forecast5Day = {}
    }

    getCities() {
        return Object.keys(this.currentWeatherData);
    }


    async addCity(city: string) {
        await this.updateCurrentWeatherDataByCity(city);
        await this.updateForecast5DayByCity(city);
    }

    async updateCurrentWeatherData() {
        // for each city in currentWeatherData, update the data
        for (let city in this.getCities()) {
            this.updateCurrentWeatherDataByCity(city);
        }
    }

    async updateForecast5Day() {

        for (let city in this.getCities()) {
            this.updateForecast5DayByCity(city);
        }
    }

    async updateCurrentWeatherDataByCity(city: string) {
        await this.handler.getCurrentWeatherByCityName({cityName:city}).then((data: any) => {this.currentWeatherData[city] = data; return 'Success';});
    }

    async updateForecast5DayByCity(city: string) {
        await this.handler.getThreeHourForecastByCityName({cityName:city}).then((data: any) => {this.forecast5Day[city] = data;return 'Success';});
    }


    async getFullWeatherByCity(city: string) {
        return this.currentWeatherData[city];
    }

    getCurrentWeatherDataByCity(city: string) {

        return {
            type: this.currentWeatherData[city].weather[0].main,
            temperature: this.currentWeatherData[city].main.temp,
            maxTemperature: this.currentWeatherData[city].main.temp_max,
            minTemperature: this.currentWeatherData[city].main.temp_min,
            feelsLike: this.currentWeatherData[city].main.feels_like,
            windSpeed: this.currentWeatherData[city].wind.speed,
            cloudPrediction: this.currentWeatherData[city].clouds, // percentage of coverage
            sunrise: this.currentWeatherData[city].sys.sunrise,
            sunset: this.currentWeatherData[city].sys.sunset,
        }
    }

    getForecast5DayByCity(city: string) {
        let timestamps = [...this.forecast5Day[city].list];

        for (let i = 0; i < timestamps.length; i++) {
            timestamps[i] = {
                time: new Date(timestamps[i].dt*1000),  // UNIX timestamp, use datetime on this
                type: timestamps[i].weather[0].main,
                temperature: timestamps[i].main.temp,
                feelsLike: timestamps[i].main.feels_like,
                cloudPrediction: timestamps[i].clouds, // percentage of cloud coverage
            }
        }



}

}
}