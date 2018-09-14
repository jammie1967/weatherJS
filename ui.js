class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.sunrise = document.getElementById('w-sunrise');
        this.sunset = document.getElementById('w-sunset');
        this.wind = document.getElementById('w-wind');
        
    }


    // displayTime(millisec) {
    //     var seconds = (millisec / 1000).toFixed(0);
    //     var minutes = Math.floor(seconds / 60);
    //     var hours = "";
    //     if (minutes > 59) {
    //         hours = Math.floor(minutes / 60);
    //         hours = (hours >= 10) ? hours : "0" + hours;
    //         minutes = minutes - (hours * 60);
    //         minutes = (minutes >= 10) ? minutes : "0" + minutes;
    //     }

    //     seconds = Math.floor(seconds % 60);
    //     seconds = (seconds >= 10) ? seconds : "0" + seconds;
    //     if (hours != "") {
    //         return hours + ":" + minutes + ":" + seconds;
    //     }
    //     return minutes + ":" + seconds;
    // }

    

    paint(weather){

        //const sunrise = this.displayTime(weather.sys.sunrise);


        this.location.textContent = `${weather.name} , ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent =weather.main.temp + " ℃" ;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.sunrise.textContent = `Sunrise:  ${weather.sys.sunrise}`;
        //this.sunrise.textContent = `Sunrise: ${sunrise}`;
        this.sunset.textContent = `Sunset: ${weather.sys.sunset}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
    }
}