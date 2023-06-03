export default async function handler(req, res) {
    let cityData = [];
    let response = await fetch("https://countriesnow.space/api/v0.1/countries");
    let data = await response.json();
    data = Array(data.data);
    for (let i = 0; i < data[0].length; i++) {
        cityData = cityData.concat(data[0][i].cities);
    }
    res.status(200).json(cityData);
}