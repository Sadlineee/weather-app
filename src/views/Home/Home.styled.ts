import styled from 'styled-components'
import { theme } from '@styles/theme'

export const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 30vh;
  height: 14rem;
  width: 18rem;
  background: ${theme.colors.bg};
  border-radius: 20px;
  box-shadow: 0 5px 10px ${theme.colors.secondary};

  @media ${theme.media.small} {
    height: 70vh;
    width: 100vw;
  }
`

export const AppTitle = styled.h1`
  font-family: ${theme.fonts.secondary};
  font-size: 2.75rem;
  font-weight: 500;
  color: ${theme.colors.primary};
`