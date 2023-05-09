import {
  CoffeeHomeInfoContainer,
  CoffeeHomeInfoContent,
  ItemsContainer,
  CardListContainer,
  TextContainer,
  CardListContent,
  CoffeContainer,
  BackgroundImageContainer,
} from './styles'
import coffee from '../../../../assets/coffee.svg'
import { Items } from './components/Items'
import { dataItems } from './DataItems'
import { CardCoffee } from '../CardCoffee'
import { listCoffees } from './ListCoffees'
import { useState } from 'react'

export function CoffeeHome() {
  return (
    <CoffeContainer>
      <BackgroundImageContainer>
        <CoffeeHomeInfoContainer>
          <CoffeeHomeInfoContent>
            <TextContainer>
              <div className="text">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h4>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </h4>
              </div>
              <ItemsContainer>
                {dataItems?.map((item, i) => (
                  <Items
                    key={item.color}
                    icon={item.icon}
                    text={item.text}
                    color={item.color}
                  />
                ))}
              </ItemsContainer>
            </TextContainer>
            <div>
              <img src={coffee} alt="" />
            </div>
          </CoffeeHomeInfoContent>
        </CoffeeHomeInfoContainer>
      </BackgroundImageContainer>
      <CardListContainer>
        <h2>Nossos Cafés</h2>

        <CardListContent>
          {listCoffees.map((coffee) => (
            <CardCoffee key={coffee.id} coffee={coffee} />
          ))}
        </CardListContent>
      </CardListContainer>
    </CoffeContainer>
  )
}
