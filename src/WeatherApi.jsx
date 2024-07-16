// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const WeatherApi = () => {
//     let [data,setData]=useState([])
//     let fetchApi= async()=>{
//         let data=await fetch ("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
//         // let finalData
//         console.log(data);
//         let finalData=await data.json()
//         console.log(finalData);
//         setData(finalData)

//     }
//     useEffect(()=>{
//       fetchApi()

//     },[])


//   return (
//     <div>
//       {data.map((m)=>{
//         console.log(m);
//         return(
//           <div>
//             <input type="Enter city name" />
//             <button>Get</button>
//             <h1>{m.button}</h1>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default WeatherApi


import React, { useState, useEffect } from 'react';

function WeatherApi() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      // let apiKey = 'cc81dab5affed9da1af46c6eaa3440fc';
      let apiUrl =" https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${cc81dab5affed9da1af46c6eaa3440fc}&units=metric";
      let response = await fetch(apiUrl);
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  let  changeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h1>Weather</h1><br />
      <input type="text" value={city} onChange={changeCity} placeholder="Enter city name"/>
      <button onChange={'fetchData'} style={{marginLeft:"20px"}}>Get Weather</button>
      {weather && (
        <div>
          <h2>Weather in : {weather.name}</h2>
          <p>Temperature : {weather.temp} °C</p>
          <p>Description : {weather.description}</p>
        </div>
        )}
    </div>
  )}
  export default WeatherApi