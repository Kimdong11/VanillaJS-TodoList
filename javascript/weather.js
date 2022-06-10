const API_KEY = 'f57fe296f00575cb434366bb948ca5a4';

navigator.geolocation.getCurrentPosition(async (position) => {
    if (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const weatherData = fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&unit=metric`
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
});
