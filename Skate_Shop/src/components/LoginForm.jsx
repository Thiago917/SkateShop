import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'



import './LoginForm.css'

const Form = () => {
  const [eyeLook, setEyeLook] = useState('password')

  const [ email, setEmail ] = useState('');
  const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
  }

  const [ senha, setSenha ] = useState('')
  const handleChangeSenha = (event) =>{
    setSenha(event.target.value);
  }

  const correctEmail = 'thiago@thiago'
  const correctSenha = 'thiago'
  const handleLogin = (e) => e.preventDefault()

  const validation = () =>{
    if(email === correctEmail && senha === correctSenha){
      console.log('Aqui era pra funcionar a parte do link')
    }
    else{
      alert('--------------------| EMAIL OU SENHA INVALIDOS!! |--------------------')
    }
          
  }

  return (
    <form action='' method='' className='form-login' onSubmit={handleLogin}>
    <div className="inputs">
      <input type="email" placeholder='Insira seu email...' id='email' className='email' name='email' value={email} onChange={handleChangeEmail} required/>
      <input type={eyeLook} placeholder='Insira sua senha...' id='senha' className='senha' name='senha' value={senha} onChange={handleChangeSenha} required/>
      <div className="eye-icon" onClick={() => eyeLook === 'password' ? setEyeLook('text') : setEyeLook('password', <closedEyeIcon />)}>
        {eyeLook === 'password' ? <FaEye /> : <FaEyeSlash />}
      </div>

      <div className="btn">
        <Link to='/store'><input type='submit' value='ENTRAR' className='seend-button' /></Link>
      </div>
      <p>Não tem conta ainda? <Link to='/cadastro'>Criar conta</Link></p>
    </div>
    </form>
  )
}

export default Form