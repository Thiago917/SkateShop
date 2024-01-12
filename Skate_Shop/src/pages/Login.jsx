
import { Link } from 'react-router-dom'
import Form from '../components/LoginForm'


import './Login.css'



const Login = () => {   
    return(
      <div className="container">
        <h1 className='title'>LOGIN</h1>
        <div className="form-container">
            <Form />
        </div>
      </div>
    )
}

export default Login