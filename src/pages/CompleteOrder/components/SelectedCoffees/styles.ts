import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  h3 {
    font-size: 18px;
  }

  img {
    width: 64px;
  }
`

export const SelectedCoffeesContent = styled(SectionBaseStyle)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 16px;
    line-height: 130%;
    color: #403937;
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`

export const AddedCoffeeContainer = styled.div`
  width: 100%;
`

export const AddedCoffeeContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  .actionCoffee {
    display: flex;
    gap: 20px;
  }
`

export const CartCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  padding: 6px;

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

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: #e6e5e5;
  border-radius: 6px;
  cursor: pointer;

  span {
    font-size: 12px;
    color: #574f4d;
  }
`

export const ConfirmOrderContainer = styled.div``

export const FooterText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};

    &.text-bold {
      font-size: 20px;
      font-weight: 700;
    }
  }
`

export const ButtonFooter = styled.button`
  margin-top: 12px;
  width: 100%;
  border: 0;
  height: 46px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['product-yellow']};
  color: ${(props) => props.theme.white};
  transition: background-color 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['product-yellow-dark']};
  }
`
