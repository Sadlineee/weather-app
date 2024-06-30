import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App: React.FC = () => {
  const [cityName, setCityName] = useState<string>('')
  const [degreeValue, setDegreeValue ] = useState<number | null>(0)
  const [themeStyle, setThemeStyle] = useState<boolean>(true)

  const themeChange = () => {
    setThemeStyle(!themeStyle)
  }

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCityName(value)
  }

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + process.env.REACT_APP_WEATHER_API + '&units=metric'
  
  useEffect(() => {
    const getData = async () => {
      if(cityName === '') {
        setDegreeValue(0)
        return
      }
      try {
        const response = await axios.get(url)
        setDegreeValue(Math.round(response.data.main.temp))
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [cityName])

  return (
    <main className="app" style={{background: themeStyle ? 'radial-gradient(circle farthest-corner at 10% 20%, rgba(2,37,78,1) 0%, rgba(4,56,126,1) 19.7%, rgba(85,245,221,1) 100.2% )' : 'linear-gradient(to top, #8a2387, #e94057, #f27121)'}}>
      <div className="app__title" onClick={ themeChange }>WeatherApp</div>
      <input className="app__search" type="text" placeholder="Enter City" onChange={ changeValue } />
      <div className="app__degree">{ degreeValue }°C</div>
    </main>
  )
}

export default App