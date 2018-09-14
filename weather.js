class Weather {
    constructor(city, country){
        this.apiKey = 'e8b6067b81ef6623d27d3c2bc173f478',
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;

    }

    // Change weather location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}