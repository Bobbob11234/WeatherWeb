const api_url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max&current_weather=true&precipitation_unit=inch&timeformat=unixtime&timezone=auto";
async function getapi(url)
{
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    console.log(data.current_weather.temperature);
}
getapi(api_url);