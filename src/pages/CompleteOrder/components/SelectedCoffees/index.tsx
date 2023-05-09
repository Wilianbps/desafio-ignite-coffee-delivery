import { Minus, Plus, Trash } from 'phosphor-react'
import React from 'react'
import {
  ActionsContainer,
  AddedCoffeeContainer,
  AddedCoffeeContent,
  ButtonFooter,
  CartCounter,
  ConfirmOrderContainer,
  FooterText,
  RemoveButton,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

export function SelectedCoffees() {
  const {
    cartItems,
    changeCartItemQuantity,
    removeCartItem,
    cartItemsTotal,
    cartQuantity,
  } = useCart()

  const cartTotal = 3.5 + cartItemsTotal

  function handleIncrease(
    e: React.MouseEvent<HTMLElement>,
    cartItemId: number,
  ) {
    e.preventDefault()
    changeCartItemQuantity(cartItemId, 'increase')
  }

  function handleDecrease(
    e: React.MouseEvent<HTMLElement>,
    cartItemId: number,
  ) {
    e.preventDefault()
    changeCartItemQuantity(cartItemId, 'decrease')
  }

  function handleRemoveItem(
    e: React.MouseEvent<HTMLElement>,
    cartItemId: number,
  ) {
    e.preventDefault()
    removeCartItem(cartItemId)
  }

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <SelectedCoffeesContent>
        <AddedCoffeeContainer>
          {cartItems.map((cart) => (
            <AddedCoffeeContent key={cart.id}>
              <div className="actionCoffee">
                <img src={`/coffees/${cart.photo}`} alt="" />
                <ActionsContainer>
                  <p>{cart.name}</p>
                  <div className="actions">
                    <CartCounter>
                      <button
                        disabled={cart.quantity <= 1}
                        onClick={(event) => handleDecrease(event, cart.id)}
                      >
                        <Minus color="#8047F8" />
                      </button>
                      <span>{cart.quantity}</span>
                      <button
                        onClick={(event) => handleIncrease(event, cart.id)}
                      >
                        <Plus color="#8047F8" />
                      </button>
                    </CartCounter>
                    <RemoveButton onClick={(e) => handleRemoveItem(e, cart.id)}>
                      <Trash color="#8047F8" size={16} />
                      <span>Remover</span>
                    </RemoveButton>
                  </div>
                </ActionsContainer>
              </div>
              <p>R$ {formatMoney(cart.price * cart.quantity)}</p>
            </AddedCoffeeContent>
          ))}
        </AddedCoffeeContainer>
        <ConfirmOrderContainer>
          <FooterText>
            <span>Total de itens</span>
            <span>R$ {formatMoney(cartItemsTotal)}</span>
          </FooterText>
          <FooterText>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </FooterText>
          <FooterText>
            <span className="text-bold">Total</span>
            <span className="text-bold">R$ {formatMoney(cartTotal)}</span>
          </FooterText>

          <ButtonFooter disabled={cartQuantity <= 0} type="submit">
            Confirmar Pedido
          </ButtonFooter>
        </ConfirmOrderContainer>
      </SelectedCoffeesContent>
    </SelectedCoffeesContainer>
  )
}
