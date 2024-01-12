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


  return (
    <div className="inputs">
      <input type="email" placeholder='Insira seu email...' id='email' className='email' name='email' value={email} onChange={handleChangeEmail}/>
      <input type={eyeLook} placeholder='Insira sua senha...' id='senha' className='senha' name='senha' value={senha} onChange={handleChangeSenha}/>
      <div className="eye-icon" onClick={() => eyeLook === 'password' ? setEyeLook('text') : setEyeLook('password', <closedEyeIcon />)}>
        {eyeLook === 'password' ? <FaEye /> : <FaEyeSlash />}
      </div>

      <div className="btn">
        <button type='submit' className='seend-button' onClick={() => email === 'thiagolimamax@gmail.com' && senha === 'thiago' ? <Link to='/store'></Link> : alert('Usuario ou senha invalidos!')}>ENTRAR</button>
      </div>  

    </div>
  )
}

export default Form