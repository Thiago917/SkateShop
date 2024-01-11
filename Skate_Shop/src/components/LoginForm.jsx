import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'



import './LoginForm.css'

const Form = () => {
  const [eyeLook, setEyeLook] = useState('password')

  return (
    <div className="inputs">
      <input type="email" placeholder='Insira seu email...' id='email' className='email' name='email'/>
      <input type={eyeLook} placeholder='Insira sua senha...' id='senha' className='senha' name='senha'/>
      <div className="eye-icon" onClick={() => eyeLook === 'password' ? setEyeLook('text') : setEyeLook('password', <closedEyeIcon />)}>
        {eyeLook === 'password' ? <FaEye /> : <FaEyeSlash />}
      </div>
    </div>
  )
}

export default Form