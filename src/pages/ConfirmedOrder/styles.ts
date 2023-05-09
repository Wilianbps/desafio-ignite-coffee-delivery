import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 80px;

  h2 {
    margin-bottom: 4px;
    line-height: 130%;
    color: ${(props) => props.theme['product-yellow-dark']};
    font-family: 'Baloo 2';
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtile']};
  }
`

export const OrderInformation = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background-color: ${(props) => props.theme.background};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    color: ${(props) => props.theme['base-text']};

    .list-Order-Information {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .background-purple {
      background-color: ${(props) => props.theme['product-purple']};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 1000px;
      padding: 8px;
    }

    .background-yellow {
      background-color: ${(props) => props.theme['product-yellow']};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 1000px;
      padding: 8px;
    }

    .background-yellow-dark {
      background-color: ${(props) => props.theme['product-yellow-dark']};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 1000px;
      padding: 8px;
    }

    .bold-700 {
      font-weight: 700;
    }

    &::before {
      content: '';
      position: absolute;
      inset: -1px;
      z-index: -1;
      border-radius: 7px 37px 7px 37px;
      background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }
  }
`
