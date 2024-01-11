import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import './CadastroForm.css'

const CadastroForm = () => {
  const [ cadastroEyeIcon, setCadastroEyeIcon ] = useState('password')
  const [ secondCadastroEyeIcon, setSecondCadastroEyeIcon ] = useState('password')

  return (
    <div className="cadastro-inputs">
        <input type="email" placeholder='Insira seu email...' className='email-cadastro email' />
          <div className="nomes">
              <input type="text" placeholder='Insira seu nome...' className='nome nome-cadastro'/>
              <input type="text" placeholder='Insira seu sobrenome...' className='sobrenome-cadastro nome' />
          </div>
        <input type={cadastroEyeIcon} placeholder='Insira sua senha...' className='senha senha-cadastro' />
        <input type={secondCadastroEyeIcon} placeholder='Confirme sua senha...' className='confirm-senha-cadastro senha'/>

      <div className='cadastro-eye-icon' onClick={() => cadastroEyeIcon === 'password' ? setCadastroEyeIcon('text') : setCadastroEyeIcon('password')}>
        {
        cadastroEyeIcon === 'password' ? <FaEye /> : <FaEyeSlash />
        }
      </div>

      <div className="second-cadastro-eye-icon" onClick={() => secondCadastroEyeIcon === 'password' ? setSecondCadastroEyeIcon('text') : setSecondCadastroEyeIcon('password')}>
        {
          secondCadastroEyeIcon === 'password' ? <FaEye /> : <FaEyeSlash />
        }
      </div>
    </div>
  )
}

export default CadastroForm