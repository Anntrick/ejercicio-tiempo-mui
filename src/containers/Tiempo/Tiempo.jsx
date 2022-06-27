import { useState, useEffect } from "react";
import axios from 'axios'
import WeatherCard from '../../components/WeatherCard/WeatherCard'

import './Tiempo.scss'

const Tiempo = props => {
    let [weather, setWeather] = useState([])

    useEffect(()=> {
        axios.get('https://www.el-tiempo.net/api/json/v2/home')
        .then(resp => {
            setWeather(resp.data.ciudades)
        })
    }, [])

    return (
        <div className="Tiempo">
            {
                weather.map((city)=> (
                    <WeatherCard data={city}/>
                ))
            }
        </div>
    )
}

export default Tiempo 