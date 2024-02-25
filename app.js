
const apiKey = "4613b00e6ab741cd94be0b337706c44e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input');
const searchbutton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather_icon')
const backImage = document.querySelector('.back')


async function checkWeather(city) {
    var response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.celcius').innerHTML = parseInt(data.main.temp) + '°c';
    document.querySelector('.humiditypercent').innerHTML = (data.main.humidity) + '%';
    document.querySelector('.windspeed').innerHTML = (data.wind.speed) + 'km/h';




    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png';
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'images/clear.png';
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'images/rain.png';
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png';
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'images/mist.png';
    }
    else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = 'images/snow.png';
    }

    if ((data.main.temp) <= 10) {
        backImage.style.backgroundImage = "url('images/cold.jpg')"
    }
    else if ((data.main.temp) >= 25) {
        backImage.style.backgroundImage = "url('images/heat.jpg')"
    }
    else if ((data.main.temp) > 10 && (data.main.temp) < 25) {
        backImage.style.backgroundImage = "url('images/pleasant.jpg')"
    }
    else {
        backImage.style.backgroundImage = "url('images/back.jpg')"
    }




}

searchbutton.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


checkWeather();

