// const getUrlForWeatherFetch = (city) => {
//     return `http://api.weatherapi.com/v1/current.json?q=${city}`;
// }

// export const fetchWeather = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: process.env.WEATHER_API_KEY
//         }
//     };

//     const response = await fetch(
//         getUrlForWeatherFetch(
//             "Mumbai"
//         ), options
//     );
//     const data = await response.json();
//     console.log(data);
// }

export const fetchWeather = async (city) => {
    const BASE_URL = "https://api.weatherapi.com/v1/current.json?";
    let query = BASE_URL + "key=" + process.env.NEXT_PUBLIC_KEY + "&q=" + city;
    let response = await fetch(query);
    let data = await response.json();
    return data;
}
