import React, { useEffect, useState } from 'react';
import "../App.css";
import DayCard from './DayCard';
import ForcastCard from './ForcastCard';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [tempUnit, setTempUnit] = useState("Celsius");
  let prevDate = '';
  let counter = 0;
  const [error, setError] = useState('');

  useEffect(() => {
    if (cityName) {
      handleSearch();
    }
    console.log("render");
  }, [tempUnit]);

  const handleInputChange = (e) => {
    // Clear error when input changes
    setError('');
    setCityName(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // Fetch weather data and check for errors when the "Search" button is clicked
    if (cityName) {
      handleSearch();
    }
  };

  async function handleSearch() {
    console.log(`Searching for weather in ${cityName}`);
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2f4d49f27e8804da7abe47355839f752&units=${tempUnit === "Celsius" ? "metric" : ""}`);
      const data = await res.json();

      if (data.cod && data.cod !== "200") {
        setError('City not found. Please enter a valid city name.');
        setWeatherData(null);
      } else {
        setError('');
        setWeatherData(data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again later.');
      setWeatherData(null);
    }
  }

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
        <button onClick={handleSearchButtonClick} className="button">
          Search
        </button>
      </div>
      {error && cityName && <div className="error-message">{error}</div>}
      <div className='forcast-day-main-container'>
        <div className='forcast-day-main'>
          {weatherData && <DayCard temp={weatherData?.list[0]?.main?.temp} icon={weatherData?.list[0]?.weather[0]?.icon} minTemp={weatherData?.list[0]?.main?.temp_min} maxTemp={weatherData?.list[0]?.main?.temp_max} humidity={weatherData?.list[0]?.main?.humidity} wind={weatherData?.list[0]?.wind?.speed} desc={weatherData?.list[0]?.weather[0]?.description} tempUnit={tempUnit} setTempUnit={setTempUnit} city={cityName} />}
        </div>
      </div>

      <div className='forcast'>
        {weatherData &&
          weatherData.list.map((list) => {
            if (list.dt_txt.split(" ")[0] !== prevDate) {
              if (counter < 5) {
                counter++;
                prevDate = list.dt_txt.split(" ")[0];
                console.log(prevDate);
                return <ForcastCard key={list.dt} date={prevDate} avgTemp={(list.main.temp_min + list.main.temp_min) / 2} desc={list?.weather[0]?.description} icon={list?.weather[0]?.icon} tempUnit={tempUnit} />;
              } else {
                return null;
              }
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Home;
