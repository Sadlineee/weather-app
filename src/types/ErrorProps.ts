import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export interface ErrorProps {
  error: FetchBaseQueryError | SerializedError | null | undefined
}