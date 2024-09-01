import React from 'react'
import { InputText } from './TextField.styled'
import { CityProps } from '@/types/CityProps'

const TextField: React.FC<CityProps> = React.memo(({ cityName, setCityName }) => {
  return (
    <InputText
      type="text"
      value={cityName}
      placeholder="Enter city"
      onChange={(e) => setCityName(e.target.value)}
    />
  )
})

export default TextField