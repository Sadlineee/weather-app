import React from 'react'
import { InputText } from './SearchField.styled'
import { CityProps } from '@/types/CityProps'

const SearchField: React.FC<CityProps> = React.memo(({ cityName, setCityName }) => {
  return (
    <InputText
      type="text"
      value={cityName}
      placeholder="Enter city"
      onChange={(e) => setCityName(e.target.value)}
    />
  )
})

export default SearchField