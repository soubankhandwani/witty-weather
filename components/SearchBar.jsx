const SearchBar = (props) => {

  return (
    <div className="flex items-center justify-center">
      <input id="cityInput" type="text" className="basis-3/4 py-3 pl-4 mb-4 text-white bg-[#111] outline-none border-slate-500 rounded-l-md focus:ring-1 hover:border-sky-500 focus:border-sky-500 transition-all duration-300 ease-in-out rounded-r-none" placeholder="Enter city name here..." autoComplete="off"/>
      <button id="fetchWeatherBtn" className="basis-1/4 py-3 px-3 lg:px-4 mb-4 text-white bg-[#111] outline-none border-slate-500 rounded-md border focus:ring-1 hover:border-sky-500 transition-all duration-300 ease-in-out rounded-l-none" onClick={props.fetchButtonHandler}>Go</button>
    </div>
  )
}

export default SearchBar
