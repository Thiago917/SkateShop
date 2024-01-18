import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './CadastroForm.css'

const CadastroForm = () => {
  const [ cadastroEyeIcon, setCadastroEyeIcon ] = useState('password')
  const [ secondCadastroEyeIcon, setSecondCadastroEyeIcon ] = useState('password')

  
  const [ email, setEmail ] = useState('')
  const handleChangeEmail = (event) =>{
  setEmail(event.target.value)
  }

  const [ nome, setNome ] = useState('')
  const handleChangeNome = (event) =>{
    setNome(event.target.value)
  }

  const [ sobrenome, setSobrenome ] = useState('')
  const handleChangeSobrenome = (event) =>{
    setSobrenome(event.target.value)
  }
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

    if(!email && !nome && !sobrenome && !primeiraSenha && !segundaSenha){
      alert('Preencha todos os campos corretamente!')
    }
      else if(primeiraSenha != segundaSenha){
      alert('As senhas são diferentes!')
      }
        else{
        alert('Cadastro feito com sucesso')
        return setTimeout(()=>{
          window.location='./'
          
        },1000)
        }
  }

  return (
    <form className='form-cadastro' onSubmit={handleOnCadastro}>
      <div className="cadastro-inputs">
        <input type="email" placeholder='Insira seu email...' className='email-cadastro email' value={email} onChange={handleChangeEmail} />
          <div className="nomes">
              <input type="text" placeholder='Insira seu nome...' className='nome nome-cadastro' value={nome} onChange={handleChangeNome} />
              <input type="text" placeholder='Insira seu sobrenome...' className='sobrenome-cadastro nome' value={sobrenome} onChange={handleChangeSobrenome} />
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
          <button type='submit' className='cadastro-seend-button seend-button' >CADASTRE-SE</button>
        </div>
        <p>Já possui conta? <Link to='/' className='link'>Faça login</Link></p>
    </form>
  )
}

export default CadastroForm