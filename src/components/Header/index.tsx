import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import {
  ButtonsContainer,
  Cart,
  HeaderContainer,
  HeaderContent,
  Location,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <ButtonsContainer>
          <Location>
            <MapPin size={22} color="#8047F8" weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <NavLink to="/completeOrder">
            <Cart>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={22} color="#C47F17" weight="fill" />
            </Cart>
          </NavLink>
        </ButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
