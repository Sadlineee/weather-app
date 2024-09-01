import React from 'react'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { ErrorText } from './ErrorValue.styled'
import { ErrorProps } from '@/types/ErrorProps'

const renderError = (error: FetchBaseQueryError | SerializedError): string => {
  if ('status' in error) {
    if (error.status === 404) {
      return `${error.status}: Сity ​​not found`
    } else {
      return `${error.status}`
    }
  } else if ('message' in error) {
    return `${error.message}`
  }
  return 'An unknown error occurred'
}

const ErrorValue: React.FC<ErrorProps> = ({ error }) => {
  if (!error) return null

  return (
    <ErrorText>
      error {renderError(error)}
    </ErrorText>
  )
}

export default ErrorValue