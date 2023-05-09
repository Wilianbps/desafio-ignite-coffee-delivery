import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 180px;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
