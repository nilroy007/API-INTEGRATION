const city = document.querySelector("#city");
const btn = document.querySelector("#btn");
const apiKey = 'd6658fcc9ef5ef744968fdfe97c30e0d';


btn.addEventListener("click", async () => {
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error : City Not Found");
        }

        const data = await response.json();

        document.querySelector(".result").innerHTML=
                        `<h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp}&#8451;</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed : ${data.wind.speed} m/s`;

    }
    catch(err){
        document.querySelector(".result").innerHTML=`<p style="color:red;">${err.message}</p>`;
    }
})