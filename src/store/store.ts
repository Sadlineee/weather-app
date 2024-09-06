import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from '@services/api/weatherApi'

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(weatherApi.middleware)
})

export type AppDispatch = typeof store.dispatch