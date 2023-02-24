function doSearch() {
    // Get city name from text box
    var aCity = document.getElementById("myCity").value;
    // Fetch Cambridge weather data from API
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=' + aCity + '&appid=2cae71d21a41a04997f5fc26b6b54ef1')
    fetch('https://mi-linux.wlv.ac.uk/~2011803/Example/my-api.php?q=' + aCity)
    
    // Convert response string to json object
    .then(response => response.json())
    .then(response => {

    // Display whole API response in browser console (take a look at it!)
    console.log(response);

    // Copy one element of response to our HTML paragraph
    // document.querySelector("#weather_00").innerHTML = response.weather[0].description;
    // document.querySelector("#weather_01").innerHTML = response.main.feels_like;
    // document.querySelector("#weather_02").innerHTML = response.main.humidity;
    // document.querySelector("#weather_03").innerHTML = response.wind.speed;
    // document.querySelector("#weather_04").innerHTML = response.main.pressure;

    document.getElementById("myWeather").innerHTML = response.weather_description;
    document.getElementById("myTemperature").innerHTML = response.weather_temperature;
    document.getElementById("myRainfall").innerHTML = response.main.humidity;
    document.getElementById("myWind").innerHTML = response.wind.speed;
    document.getElementById("myPressure").innerHTML = response.main.pressure;


    })
    .catch(err => {

    // Display errors in consol
    console.log(err);
    });
}
