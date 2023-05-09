import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 32px 0;
  background-color: ${(props) => props.theme.background};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;

  background: ${(props) => props.theme['product-purple-light']};

  span {
    font-size: 14px;
    font-family: 'Roboto';
    color: ${(props) => props.theme['product-purple-dark']};
    font-weight: 500;
  }
`

export const Cart = styled.button`
  border: 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  position: relative;

  background: ${(props) => props.theme['product-yellow-light']};

  span {
    position: absolute;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['product-yellow-dark']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`
