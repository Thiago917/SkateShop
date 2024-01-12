import React from 'react'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Store from './pages/Store'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes