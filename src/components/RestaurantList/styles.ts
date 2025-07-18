import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
