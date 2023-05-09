import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  h4 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['base-subtile']};
    line-height: 130%;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`
