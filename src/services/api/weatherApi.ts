import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/3.0' }),
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (cityName) => `/weather?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    })
  })
})

export const { useGetWeatherDataQuery } = weatherApi