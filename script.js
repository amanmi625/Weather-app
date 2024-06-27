const apiKey = "7b79c2f0f47ea9d4a291bb43d67c849a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const details = document.querySelector(".details");



async function checkWeather(city){
      const response = await fetch(apiUrl + city 
           +`&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".error").style.display = "none";
  }
  else{
      var data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = 
    Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
      document.querySelector(".status").innerHTML = data.weather[0].main;
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";

    if(data.weather[0].main == "Clouds"){
       weatherIcon.src = "cloud.jpg";
    }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Clear.png";
      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Rain.png";
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Drizzle.png";
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Mist.jpg";
      }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})


checkWeather();
