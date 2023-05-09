import styled from 'styled-components'
import background from '../../../../assets/background.svg'

export const CoffeContainer = styled.div`
  margin-bottom: 157px;
`

export const BackgroundImageContainer = styled.div`
  background-image: url(${background});
`

export const CoffeeHomeInfoContainer = styled.div`
  height: 34rem;
  max-width: 1120px;
  margin: 0 auto;

  background-repeat: no-repeat;
  background-size: cover;
`

export const CoffeeHomeInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
  padding-top: 94px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtile']};
    }
  }
`

export const TextContainer = styled.div`
  max-width: 588px;
`

export const ItemsContainer = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const CardListContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  h2 {
    margin-top: 32px;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtile']};
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 34px;
  }
`

export const CardListContent = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`
