import HorizontalRule from "./HorizontalRule";

const App = () => {
  return (
    <div className="flex flex-col mb-6 justify-center h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-slate-400">
      <div className="mt-4 flex justify-center items-center">
        <img id="conditionIcon" src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="Current Weather" />
        <ul className="text-slate-100 list-disc marker:text-white">
          <li id="weatherDescription" className="ml-4">--</li>
        </ul>
      </div>

      <div className="flex justify-center items-center text-center w-full">
        <h3 className="mt-2 text-white font-thin text-5xl lg:text-7xl"><span id="mainTemp">--</span> °C</h3>
      </div>

      <HorizontalRule />

      <div className="flex justify-center items-center text-center w-full mt-2 mb-2">
        <div className="flex justify-center items-center px-2">
          <p id="locationName" className="text-white font-thin">--</p>
          {/* <p id="locationRegion" className="list-disc text-white marker:text-white ">--</p> */}
        </div>
      </div>

      <div className="flex px-4 py-1 lg:px-4 lg:py-2 justify-start bg-[#111] rounded-md items-center text-center mx-2 lg:mr-14 lg:ml-14 mt-2 mb-2">
        <div className="flex basis-3/5">
          <p className="text-white py-2 font-thin mr-4">Feels Like :</p>
        </div>
        <div className="flex basis-2/5 justify-center text-right">
          <p id="feelsLikeTemp" className="text-white font-thin mr-4">-- °C</p>
        </div>
      </div>
      <div className="flex px-4 py-1 lg:px-4 lg:py-2 justify-start bg-[#111] rounded-md items-center text-center mx-2 lg:mr-14 lg:ml-14 mb-2">
        <div className="flex basis-3/5">
          <p className="text-white py-2 font-thin mr-4">Humidity :</p>
        </div>
        <div className="flex basis-2/5 justify-center text-right">
          <p id="tempHumidity" className="text-white font-thin mr-4">--</p>
        </div>
      </div>

      <div className="flex px-4 py-1 lg:px-4 lg:py-2 justify-start bg-[#111] rounded-md items-center text-center mx-2 lg:mr-14 lg:ml-14 mb-4">
        <div className="flex basis-3/5">
          <p className="text-white py-2 text-sm font-thin mr-4">Wind Speed :</p>
        </div>
        <div className="flex basis-2/5 justify-center text-right">
          <p id="tempWindSpeed" className="text-white font-thin mr-4">-- Kph</p>
        </div>
      </div>
    </div>
  )
}

export default App;
