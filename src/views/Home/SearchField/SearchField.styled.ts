import styled from 'styled-components'
import { theme } from '@styles/theme'

export const InputText = styled.input`
  height: 2.5rem;
  width: 100%;
  text-align: center;
  font-family: ${theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 400;
  color: ${theme.colors.secondary};
  border: none;

  &::placeholder {
    font-weight: 300;
    color: ${theme.colors.secondary};
  }

  &:focus {
    outline: none;
  }
`