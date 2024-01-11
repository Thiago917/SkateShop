import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'



import './CadForm.css'

const Form = () => {
  const [ eyeLook, setEyeLook ] = useState('password')
  const [ secondEyeLook, setSecondEyeLook ] = useState('password')

  return (
    <div className="cad-container">
        <h1 className='title-cad title'>Cadastre-se</h1>
            <form action="" className='form-cadastro'>
                <div className="inputs">
                    <input type="email" placeholder='Insira seu email...' id='email' className='email'/>
                    <input type="email" placeholder='Insira seu nome completo...' id='nome' className='nome'/>
                    <input type={eyeLook} placeholder='Insira sua senha...' id='senha' className='senha'/>
                    <input type={secondEyeLook} placeholder='Confirme sua senha...' id='senha' className='senha'/>
                </div>
                <div className="eye-icon" onClick={() => eyeLook === 'password' ? setEyeLook('text') : setEyeLook('password', <closedEyeIcon />)}>
                    {eyeLook === 'password' ? <FaEye /> : <FaEyeSlash />}
                </div>
                <div className="second-eye-icon" onClick={() => secondEyeLook === 'password' ? setSecondEyeLook('text') : setSecondEyeLook('password', <closedEyeIcon />)}>
                    {secondEyeLook === 'password' ? <FaEye /> : <FaEyeSlash />}
                </div>
                <button type='button' className='cad-btn'>Cadastre-se</button>
                <p>Já tem uma conta?</p><Link to='/'>Acesse aqui</Link>
            </form>
        </div>
  )
}

export default Form