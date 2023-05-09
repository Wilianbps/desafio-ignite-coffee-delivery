import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { CompleteOrderPage } from '../pages/CompleteOrder'
import { ConfirmedOrderPage } from '../pages/ConfirmedOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/confirmedOrder" element={<ConfirmedOrderPage />} />
      </Route>
    </Routes>
  )
}
