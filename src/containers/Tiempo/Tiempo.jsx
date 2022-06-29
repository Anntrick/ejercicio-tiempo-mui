import { useState, useEffect } from "react";
import axios from 'axios'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import WeatherCard from '../../components/WeatherCard/WeatherCard'

import './Tiempo.scss'

const Tiempo = props => {
    let [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get('https://www.el-tiempo.net/api/json/v2/home')
            .then(resp => {
                setWeather(resp.data.ciudades)
            })
    }, [])

    return (
        <Grid container spacing={2} className="Tiempo">
            {
                weather.map((city) => (
                    <Grid item xs={12} md={6} lg={4}>
                        <Card  >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {city.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {city.stateSky.description}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    Temperatura
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    max {city.temperatures.max}
                                    min {city.temperatures.min}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Tiempo 