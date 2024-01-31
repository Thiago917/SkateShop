import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import IntroStore from './pages/InstroStore'
import Contato from './pages/sub-pages/Contato'
import Comunidade from './pages/sub-pages/Comunidade'
import Shop from './pages/sub-pages/Shop'
import Entrega from './pages/sub-pages/Entrega'
import Store from './pages/Store'
import PaginaProduto from './pages/PaginaProduto'
import Compra from './pages/Compra'
import Car from './pages/sub-pages/Car'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/introStore' element={<IntroStore />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/comunidade' element={<Comunidade />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/entrega' element={<Entrega />} />
        <Route path='/store' element={<Store />} /> 
        <Route path='/produto/:id' element={<PaginaProduto />} /> 
        <Route path='/compra/:id' element={<Compra />} /> 
        <Route path='/carrinho/:id' element={<Car />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes