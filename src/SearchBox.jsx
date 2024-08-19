import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_KEY = "6b80bc6f0284b3d39dc295a1414b6a5f";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    let weatherInfo = async () => {
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;
       }catch(err){
        throw err;
       }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await weatherInfo();
        updateInfo(newInfo);
       }catch{
        setError(true);
       }
    };
    

   return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" 
                label="City Name" 
                variant="outlined" 
                value={city} 
                onChange={handleChange} 
                required
                 />
                <br></br><br></br>
                <Button variant="contained" type='submit' >Search</Button>
                {error && <p style={{color: "red"}}>No such place exists</p>}
            </form>
        </div>
   )
}