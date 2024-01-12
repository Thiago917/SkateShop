import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './CadastroForm.css'

const CadastroForm = () => {
  const [ cadastroEyeIcon, setCadastroEyeIcon ] = useState('password')
  const [ secondCadastroEyeIcon, setSecondCadastroEyeIcon ] = useState('password')

  
  const [ primeiraSenha, setPrimeiraSenha ] = useState('')
  const handleChangePrimeiraSenha = (event) => {
    setPrimeiraSenha(event.target.value)
  }

  const [ segundaSenha, setSegundaSenha ] = useState('')
  const handleChangeSegundaSenha = (event) =>{
    setSegundaSenha(event.target.value)
  }

  const handleOnCadastro = (e) =>{
    e.preventDefault()
    if(primeiraSenha != segundaSenha){
      alert('As senhas precisam ser iguais!')
    }
    else{
      <Link to='/'></Link>
    }
  }

  return (
    <form className='form-cadastro' onSubmit={handleOnCadastro}>
      <div className="cadastro-inputs">
        <input type="email" placeholder='Insira seu email...' className='email-cadastro email' />
          <div className="nomes">
              <input type="text" placeholder='Insira seu nome...' className='nome nome-cadastro'/>
              <input type="text" placeholder='Insira seu sobrenome...' className='sobrenome-cadastro nome' />
          </div>
        <input type={cadastroEyeIcon} placeholder='Insira sua senha...' className='senha senha-cadastro' value={primeiraSenha} onChange={handleChangePrimeiraSenha}/>
        <input type={secondCadastroEyeIcon} placeholder='Confirme sua senha...' className='confirm-senha-cadastro senha' value={segundaSenha} onChange={handleChangeSegundaSenha}/>

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
        <div className="btn-cadastro">
          <button type='submit' className='cadastro-seend-button seend-button' onClick={() => primeiraSenha === segundaSenha ? <Link to='/'></Link> : alert('As senhas precisam ser iguais')}>CADASTRE-SE</button>
        </div>
        <p>Já possui conta? <Link to='/'>Faça login</Link></p>
    </form>
  )
}

export default CadastroForm