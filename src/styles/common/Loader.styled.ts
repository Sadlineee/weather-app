import styled from 'styled-components'
import { theme } from '@styles/theme'

export const Loader = styled.div`
  display: inline-block;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  height: 1.5rem;
  border: 2px solid ${theme.colors.primary};
  border-radius: 50%;
  border-bottom-color: transparent;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
`