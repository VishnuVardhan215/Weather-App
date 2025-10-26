import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Wonderland",
        feelsLike: 30.09,
        temp: 31.05,
        tempMin: 31.05,
        tempMax: 31.05,
        humidity: 33,
        weather: "haze"});

        let updateInfo = (newInfo) =>{
            setWeatherInfo(newInfo);
        }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}