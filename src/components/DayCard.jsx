import { faCloud, faTemperatureHigh, faTemperatureLow, faTemperatureThreeQuarters, faWater, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const DayCard = ({temp,icon,minTemp,maxTemp,humidity,wind,desc,tempUnit,setTempUnit}) => {

   

  return (
    <div className='card'>
      <div className='upper-box'>
        <div className='item'>
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="lg" style={{color: "#FFD43B"}} />
            <div className='item-text'>Temperature - {temp} {tempUnit}</div>
        </div>
        <div className='icon-container'>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
        </div>
      </div>
      <div className='lower-container'>
        <div className='item'>
        <FontAwesomeIcon icon={faTemperatureLow} size="lg" style={{color: "#FFD43B",}} />
          <div className='item-text'>Min temperature - {minTemp}  {tempUnit}</div>
        </div>
        <div className='item'>
        <FontAwesomeIcon icon={faTemperatureHigh} size="lg" style={{color: "#FFD43B",}} />
          <div className='item-text'>Max temperature - {maxTemp}  {tempUnit}</div>
        </div>
        <div className='item'>
        <FontAwesomeIcon icon={faWater} size="lg" style={{color: "#FFD43B",}} />
          <div className='item-text'>Humidity - {humidity}</div>
        </div>
        <div className='item'>
        <FontAwesomeIcon icon={faWind} size="lg" style={{color: "#FFD43B",}} />
          <div className='item-text'>Wind speed and direction - {wind} km/h</div>
        </div>
        <div className='item'>
        <FontAwesomeIcon icon={faCloud} size="lg" style={{color: "#FFD43B",}} />
          <div className='item-text'>Description - {desc}</div>
        </div>
        <button className="toggle-button" onClick={() => {tempUnit === "Celsius" ? setTempUnit("Fahrenheit") : setTempUnit("Celsius")}}>
            Celsius/Fahrenheit
        </button>

        
      </div>
      
    </div>
  )
}

export default DayCard
