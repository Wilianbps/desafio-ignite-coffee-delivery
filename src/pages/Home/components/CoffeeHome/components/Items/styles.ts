import styled from 'styled-components'

const STATUS_COLORS = {
  yellowDark: 'product-yellow-dark',
  baseText: 'base-text',
  yellow: 'product-yellow',
  purple: 'product-purple',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

/* const colors = {
  yellowDark: '#ca7f17',
  baseText: '#574f4d',
  yellow: '#dbac2c',
  purple: '#8047f8',
} */

export const ItemsContainer = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    padding: 8px;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`
