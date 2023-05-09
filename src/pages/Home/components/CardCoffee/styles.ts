import styled from 'styled-components'

export const CardCooffeContainer = styled.div`
  padding: 0 24px 24px 24px;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  text-align: center;

  img {
    position: relative;
    top: -20px;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Tag = styled.div`
  padding: 4px 8px;

  background: ${(props) => props.theme['product-yellow-light']};
  border-radius: 100px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;

  text-transform: uppercase;

  color: ${(props) => props.theme['product-yellow-dark']};
`

export const CardCoffeeContent = styled.main`
  margin-top: 1rem;
  margin-bottom: 2.063rem;
  header {
    h2 {
      margin-bottom: 8px;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtile']};
    }
  }
  p {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CardCoffeeFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .coin {
    font-family: 'Roboto';
    font-size: 14px;
    margin-right: 5px;
  }
  .value {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 24px;
  }
`

export const CartCounterContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const CartCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  padding: 8px;

  background: ${(props) => props.theme['base-button']};

  span {
    color: ${(props) => props.theme['base-title']};
  }
  button {
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['base-button']};
  }
`

export const ShoppingCartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  border: 0;

  background: ${(props) => props.theme['product-purple-dark']};
  transition: background-color 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['product-purple']};
  }
`
