import {
  CardCoffeeContent,
  CardCoffeeFooter,
  CardCooffeContainer,
  CartCounter,
  CartCounterContainer,
  ShoppingCartContainer,
  Tag,
  TagContainer,
} from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CardCoffee({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  return (
    <CardCooffeContainer>
      <header>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <TagContainer>
          {coffee.tags.map((tag) => (
            <Tag key={`${coffee.id}${tag}`}>{tag}</Tag>
          ))}
        </TagContainer>
      </header>

      <CardCoffeeContent>
        <header>
          <h2>{coffee.name}</h2>
        </header>
        <p>{coffee.description}</p>
      </CardCoffeeContent>
      <CardCoffeeFooter>
        <div>
          <span className="coin">R$</span>
          <span className="value">{formatMoney(coffee.price)}</span>
        </div>
        <CartCounterContainer>
          <CartCounter>
            <button disabled={quantity <= 1} onClick={handleDecrease}>
              <Minus color="#8047F8" />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>
              <Plus color="#8047F8" />
            </button>
          </CartCounter>
          <ShoppingCartContainer>
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color="#fff"
              onClick={handleAddToCart}
            />
          </ShoppingCartContainer>
        </CartCounterContainer>
      </CardCoffeeFooter>
    </CardCooffeContainer>
  )
}
