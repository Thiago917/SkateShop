import React from 'react'
import { Link } from 'react-router-dom'
import CadastroForm from '../components/CadastroForm'

import './Cadastro.css'

const Cadastro = () => {
  return (
    <div className="container-cadastro">
        <h1 className='title title-cadastro'>CADASTRE-SE</h1>
        <div className="form-container-cadastro form-container">
          <form action='../validation/Cadastro.php' method='post' className='form-cadastro'>
            <CadastroForm />
            <div className="btn-cadastro">
              <button type='submit' className='cadastro-seend-button seend-button'>CADASTRE-SE</button>
            </div>
              <p>Já possui conta? <Link to='/'>Faça login</Link></p>
          </form>
        </div>
      </div>
  )
}

export default Cadastro