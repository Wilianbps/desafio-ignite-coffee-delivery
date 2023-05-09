import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <h3>Complete seu pedido</h3>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color="#c47f17" />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color="#8047f8" />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
