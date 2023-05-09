import { ConfirmedOrderContainer, OrderInformation } from './styles'
import illustration from '../../assets/illustration.svg'
import { MapPin } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function ConfirmedOrderPage() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

  return (
    <ConfirmedOrderContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderInformation>
        <section>
          <div className="list-Order-Information">
            <div className="background-purple">
              <MapPin size={22} color="#ffffff" weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <span className="bold-700">
                  {state.street}, {state.number}
                </span>
              </p>
              <p>
                {state.city} - {state.district}, {state.uf}
              </p>
            </div>
          </div>
          <div className="list-Order-Information">
            <div className="background-yellow">
              <MapPin size={22} color="#ffffff" weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p className="bold-700">20 min - 30 min</p>
            </div>
          </div>
          <div className="list-Order-Information">
            <div className="background-yellow-dark">
              <MapPin size={22} color="#ffffff" weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p className="bold-700">
                {paymentMethods[state.paymentMethod].label}
              </p>
            </div>
          </div>
        </section>
        <img src={illustration} alt="" />
      </OrderInformation>
    </ConfirmedOrderContainer>
  )
}
