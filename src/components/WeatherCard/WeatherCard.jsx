import React from "react";
import './WeatherCard.scss'

const WeatherCard = props => {
    
    return (
        <div className="WeatherCard">
            <p>Ciudad: {props.data.name}</p>
            <p>Descripción: {props.data.stateSky.description}</p>
            <p>Temperatura: 
                <span>max: {props.data.temperatures.max}</span>
                <span>min: {props.data.temperatures.min}</span>
            </p>
        </div>
    )
}

export default WeatherCard 