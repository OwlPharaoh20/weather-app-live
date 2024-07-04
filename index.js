const apiKey = "311ee79a89f82a87acac9abdc2574dc0"
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q= "

async function checkWeather (){
 const response = await fetch ( apiUrl + `&appid={apiKey}`);
 var data = await response.json();

 console.log (data);

}

checkWeather () 


 
