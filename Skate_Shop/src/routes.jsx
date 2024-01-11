import React from 'react'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes