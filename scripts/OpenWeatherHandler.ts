import OpenWeatherMap from 'openweathermap-ts';


export class OpenWeatherHandler {
    private apiKey: string;


    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    makeConnection() {
        return new OpenWeatherMap(this.apiKey);
    }

    async getWeatherByCity(city: string) {
        const connection = this.makeConnection();
        return await connection.getWeatherByCityName(city);
    }
}