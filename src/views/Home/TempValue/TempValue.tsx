import React from 'react'
import { TempText } from './TempValue.styled'
import { Loader } from '@/styles/common'
import { TempProps } from '@/types/TempProps'

const TempValue: React.FC<TempProps> = ({ tempValue, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <TempText>
      {tempValue !== null ? `${tempValue}°C` : '-'}
    </TempText>
  )
}

export default TempValue