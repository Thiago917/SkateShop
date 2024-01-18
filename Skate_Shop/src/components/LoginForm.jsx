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

  const emailThiago = 'thiago@thiago'
  const senhaThiago = 'thiago'

  const emailAndrey = 'andrey@andrey'
  const senhaAndrey = 'andrey'

  const handleOnLogin = () =>{
    if((email === emailThiago && senha === senhaThiago) || (email === emailAndrey && senha === senhaAndrey)){
      alert('Login efetuado com suceso!!')
      return setTimeout(window.location='./introStore', 2500)
    }
    else{
      alert('--------------------| EMAIL OU SENHA INVALIDOS!! |--------------------')
    }
          
  }

  return (
    <form action='' method='' className='form-login' onSubmit={(e) => e.preventDefault()}>
    <div className="inputs">
      <input type="email" placeholder='Insira seu email...' id='email' className='email' name='email' value={email} onChange={handleChangeEmail} required/>
      <input type={eyeLook} placeholder='Insira sua senha...' id='senha' className='senha' name='senha' value={senha} onChange={handleChangeSenha} required/>
      <div className="eye-icon" onClick={() => eyeLook === 'password' ? setEyeLook('text') : setEyeLook('password', <closedEyeIcon />)}>
        {eyeLook === 'password' ? <FaEye /> : <FaEyeSlash />}
      </div>

      <div className="btn">
       <button type='submit' className='seend-button' onClick={handleOnLogin}>Entrar</button>
      </div>
      <p className='asked-question'>Não tem conta ainda? <Link to='/cadastro' className='link'>Criar conta</Link></p>
    </div>
    </form>
  )
}

export default Form