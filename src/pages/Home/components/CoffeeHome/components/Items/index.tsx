import { ItemsContainer } from './styles'
import { ReactNode } from 'react'

interface ItemsProps {
  icon: ReactNode
  color: 'yellowDark' | 'baseText' | 'yellow' | 'purple'
  text: string
}

export function Items(props: ItemsProps) {
  const { icon, color, text } = props

  return (
    <ItemsContainer statusColor={color}>
      <div className="circle">{icon}</div>
      <span>{text}</span>
    </ItemsContainer>
  )
}
