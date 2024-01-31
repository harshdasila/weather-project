import React, { useEffect, useState } from 'react';
import "../App.css"
import DayCard from './DayCard';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData,setWeatherData] = useState(null)
  const [tempUnit,setTempUnit] = useState("Celsius")

  useEffect(()=>{
    cityName && handleSearch();
    console.log("render")
  },[tempUnit])

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  async function handleSearch(){
    var flag = true;
    console.log(`Searching for weather in ${cityName}`);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2f4d49f27e8804da7abe47355839f752&units=${tempUnit=="Celsius"?"metric":""}`);
    const data = await res.json();
    setWeatherData(data);
    
  };

  return (
    <div className="weather-forecast-container">
      <h1 className="weather-forecast-heading">Weather Forecast</h1>
      <div className="search-container">
        <label htmlFor="cityName" className="label">
          City Name:
        </label>
        
        <input
          type="text"
          id="cityName"
          value={cityName}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={handleSearch} className="button">
          Search
        </button>
      </div>

        <div className='forcast-day-main-container'>
            <div className='forcast-day-main'>
            {weatherData?.list && <DayCard temp={weatherData?.list[0]?.main?.temp} icon={weatherData?.list[0]?.weather[0]?.icon} minTemp={weatherData?.list[0]?.main?.temp_min} maxTemp={weatherData?.list[0]?.main?.temp_max} humidity={weatherData?.list[0]?.main?.humidity} wind={weatherData?.list[0]?.wind?.speed} desc={weatherData?.list[0]?.weather[0]?.description} tempUnit={tempUnit} setTempUnit={setTempUnit} city={cityName}/>}
            </div>
            
        </div>
      {}
      <div className='forcast'>
        <div className='forcast-day'></div>
        <div className='forcast-day'></div>
        <div className='forcast-day'></div>
        <div className='forcast-day'></div>
        <div className='forcast-day'></div>
      </div>
    </div>
  );
};

export default Home;
