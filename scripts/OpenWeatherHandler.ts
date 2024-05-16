import OpenWeatherMap from 'openweathermap-ts';


export class OpenWeatherHandler {
    private apiKey: string;
    private handler: OpenWeatherMap;



    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.handler = new OpenWeatherMap({api: this.apiKey})
    }


    async getWeatherByCity(city: string) {
        // Returns a promise
        return this.handler.getCurrentWeatherByCityName({cityName: city});
    }
}