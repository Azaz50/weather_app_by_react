import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25,
        tempMax: 25,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
       <div style={{textAlign:"center"}}>
             <h2>Weather App By Azaz</h2>
             <SearchBox updateInfo={updateInfo} />
             <InfoBox info={weatherInfo} />
       </div>
        
    )
}