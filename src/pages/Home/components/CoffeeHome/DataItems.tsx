import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const dataItems = [
  {
    icon: <ShoppingCart color="#fff" />,
    color: 'yellowDark',
    text: 'Compra Simples e segura',
  },
  {
    icon: <Package color="#fff" />,
    color: 'baseText',
    text: 'Embalagem mantém o café intacto',
  },
  {
    icon: <Timer color="#fff" />,
    color: 'yellow',
    text: 'Entrega rápida e rastreada',
  },
  {
    icon: <Coffee color="#fff" />,
    color: 'purple',
    text: 'O café chega fresquinho até você',
  },
] as const
