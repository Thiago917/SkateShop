import CadastroForm from '../components/CadastroForm'

import './Cadastro.css'


const Cadastro = () => {
  return (
    <div className="container-cadastro">
        <h1 className='title title-cadastro'>REGISTRAR</h1>
        <div className="form-container-cadastro form-container">
            <CadastroForm />
        </div>
      </div>
  )
}

export default Cadastro