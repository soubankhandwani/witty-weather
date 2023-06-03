import { useRouter } from "next/router";
export default async function fetchW(req, res) {
        const router = useRouter();
        // const param = router.query;
        // console.log(param);
        const CITY = "q=Paris";
        const BASE_URL = "http://api.weatherapi.com/v1/current.json?";
        let query = BASE_URL + "key=" + process.env.KEY + "&" + CITY
        let response = await fetch(query);
        let data = await response.json();
        console.log(process.env.KEY)
        res.status(200).json(data)
}