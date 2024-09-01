import React, { useState } from 'react'
import { useGetWeatherDataQuery } from '@services/api/weatherApi'
import { HomePage } from './Home.styled'
import { Loader, AppTitle } from '@styles/common'

const TextField = React.lazy(() => import('./TextField'))
const TempValue = React.lazy(() => import('./TempValue'))
const ErrorValue = React.lazy(() => import('./ErrorValue'))

const Home: React.FC = () => {
  const [cityName, setCityName] = useState<string>('')

  const { data, error, isLoading } = useGetWeatherDataQuery(cityName, {
    skip: cityName.length === 0
  })

  return (
    <HomePage>
      <React.Suspense fallback={ <Loader /> }>
        <AppTitle>WeatherApp</AppTitle>
        <TextField cityName={cityName} setCityName={setCityName} />
        <TempValue tempValue={data?.main?.temp ? Math.round(data.main.temp) : null} isLoading={isLoading} />
        <ErrorValue error={error} />
      </React.Suspense>
    </HomePage>
  )
}

export default Home