import { Link } from 'react-router-dom'
import Form from '../components/LoginForm'
import './Login.css'
const Login = () => {   
    return(
      <div className="container">
        <h1 className='title'>LOGIN</h1>
        <div className="form-container">
          <form action='../validation/Login.php' nethod='post' className='form-login'>
            <Form />
            <p>Não tem conta ainda? <Link to='/cadastro'>Criar conta</Link></p>
            <div className="btn">
              <button type='submit' className='seend-button'>ENTRAR</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login