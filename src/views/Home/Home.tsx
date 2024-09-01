import React, { useState } from 'react'
import { useGetWeatherDataQuery } from '@services/api/weatherApi'
import { AppTitle, HomePage } from './Home.styled'
import { Loader } from '@styles/common'

const SearchField = React.lazy(() => import('./SearchField'))
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
        <SearchField cityName={cityName} setCityName={setCityName} />
        <TempValue tempValue={data?.main?.temp ? Math.round(data.main.temp) : null} isLoading={isLoading} />
        <ErrorValue error={error} />
      </React.Suspense>
    </HomePage>
  )
}

export default Home