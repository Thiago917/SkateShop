import CadastroForm from '../components/CadastroForm'

import './Cadastro.css'


const Cadastro = () => {
  return (
    <div className="container-cadastro">
        <h1 className='title title-cadastro'>CADASTRE-SE</h1>
        <div className="form-container-cadastro form-container">
            <CadastroForm />
        </div>
      </div>
  )
}

export default Cadastro