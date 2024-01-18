import logo from '../assets/logo.png'
import { SocialIcon } from 'react-social-icons'


import './StoreFooter.css'


const StoreFooter = () => {

  return (
    <div className="store-footer">
      <div className="footer">

        <footer>
          <div className="description-content">
            <h1 className='description'>Central de Ajuda</h1>
            <h3 className='description'>Tabela de medições</h3>
            <h3 className='description'>Trocas e devoluções</h3>
            <h3 className='description'>Perguntas frequentes</h3>
          </div>

          <div className="logo">
            <img src={logo} alt="Logo Skate Shop" className='logo' />
          </div>

          <div className="redes-sociais-icons">
            <h2>Redes Sociais</h2>
            <div className="icons">
              <SocialIcon url='https://facebook.com.br' className='icon' />
              <SocialIcon url='https://instagram.com.br' className='icon'/>
              <SocialIcon url='https://tiktok.com.br' className='icon'/>
            </div>
          </div>

        </footer>

      </div>
      <div className="horizontal-line">
        <p className='copyright'>Copyright © Flip 2023, Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default StoreFooter