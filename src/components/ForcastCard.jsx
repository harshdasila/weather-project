import { faCloud, faTemperatureThreeQuarters} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const DayCard = ({date,avgTemp,desc,icon,tempUnit}) => {

   console.log(date,avgTemp,desc,icon,tempUnit)

  return (
    <div className='card'>
        <div className='date'>
            DATE - {date}
        </div>
      <div className='upper-box'>
        
        <div className='item'>
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="lg" style={{color: "#FFD43B"}} />
            <div className='item-text'>Average Temperature - {avgTemp} {tempUnit}</div>
        </div>
        <div className='icon-container'>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
        </div>
      </div>
      <div className='lower-container'>
        
        <div className='item'>
            <FontAwesomeIcon icon={faCloud} size="lg" style={{color: "#FFD43B",}} />
            <div className='item-text'>Description - {desc}</div>
        </div>
        
      </div>
      
    </div>
  )
}

export default DayCard
