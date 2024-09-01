import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const ErrorText = styled.span`
  font-family: ${theme.fonts.primary};
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.colors.danger}
`