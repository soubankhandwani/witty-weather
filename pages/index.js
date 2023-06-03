import Head from "next/head";

import { useEffect } from "react";

import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import App from "@/components/App";

import { fetchWeather } from "@/lib/fetch-weather";

export default function Home() {
  var tempData;
  function autocomplete(inp, arr) {
    // console.log("Array", arr)
    // console.log("Styles", styles.au)
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
      var a, b, i, j, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("div");
      a.setAttribute("id", `${this.id}autocompleteList`);
      a.setAttribute("class", "autocompleteItems z-50 text-white absolute w-4/5 md:w-2/6 lg:w-2/6 border border-slate-500 border-b-0 border-t-0 top-[151px] max-[320px]:top-[157px] transition-all duration-300 ease-in-out");
      // a.classList.add("text-white")
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0, j = 0; i < arr.length; i++) {
        if (j > 5) {
          break;
        }
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("div");
          b.setAttribute("class", "bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-slate-500 border-r-[0] border-l-[0] border-t-0 p-3.5 cursor-pointer bg-slate-500 hover:border-transparent hover:bg-[#444444] transition-all duration-300 ease-in-out")
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          j++;
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocompleteList");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocompleteActive":*/
      x[currentFocus].classList.add("autocompleteActive");
      x[currentFocus].classList.add("bg-sky-500");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocompleteActive");
        x[i].classList.remove("bg-sky-500");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocompleteItems");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }

  const fetchWeatherClick = async () => {

    let input = document.getElementById("cityInput");
    let mainTemp = document.getElementById("mainTemp");
    let feelsLikeTemp = document.getElementById("feelsLikeTemp");
    let locationName = document.getElementById("locationName");
    let locationRegion = document.getElementById("locationRegion");
    let tempHumidity = document.getElementById("tempHumidity");
    let tempWindSpeed = document.getElementById("tempWindSpeed");
    let weatherDescription = document.getElementById("weatherDescription");
    let conditionIcon = document.getElementById("conditionIcon");
    let inputValue = input.value;

    tempData = await fetchWeather(inputValue, process.env.KEY);
    // console.log(tempData)

    mainTemp.innerText = tempData.current.temp_c;
    feelsLikeTemp.innerText = `${tempData.current.feelslike_c}°C`;
    locationName.innerText = `${tempData.location.name} . ${tempData.location.region}, ${tempData.location.country}`;
    // locationRegion.innerText = `${tempData.location.region}, ${tempData.location.country}`;
    tempHumidity.innerText = tempData.current.humidity;
    tempWindSpeed.innerText = `${tempData.current.wind_kph} Kph`;
    weatherDescription.innerText = tempData.current.condition.text;
    conditionIcon.src = tempData.current.condition.icon;    
  }

useEffect(() => {
  async function fetchCity() {
    fetch("http://localhost:3000/api/fetchcity")
      .then(async (res) => {
        let data = await res.json();
        // console.log("Data", data);
        let cityInput = document.getElementById('cityInput');
        autocomplete(cityInput, data);
      })
  }
  fetchCity();
}, [])

return (
  <>
    <Head>
      <title>Witty Weather</title>
      <meta name="description" content="Stay informed with a dash of humor! WittyWeather is your go-to web app for current weather updates worldwide. Experience accurate forecasts delivered with a playful twist, making checking the weather a delightful experience. Embrace the charm of witty remarks while staying on top of the ever-changing atmospheric conditions. Discover the perfect blend of professionalism and amusement with WittyWeather today!" />
    </Head>

    <div className="bg-black w-full h-full">
      <TopBar />
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-10/12 md:w-3/6 lg:w-2/6">
          <SearchBar fetchButtonHandler={fetchWeatherClick} />
          <App />
        </div>
      </div>
    </div>
  </>
)
}