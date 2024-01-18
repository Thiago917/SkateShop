import { Link } from 'react-router-dom'
import calca from '../assets/calça-cargo.png'

import './Calca.css'

const Calca = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (

        <div className="calca-container">
            <div className="calca-content">
                <p className="product-description name">
                    Calça Cargo Caqui
                </p>
                <img src={calca} alt="" />
                <p className="product-description price">
                    R$ 179,90
                </p>
            </div>

        <div className="calca-description">
            <div className="empresa">
                <p>Vendido e entregue por <Link className='company'>Mizac</Link></p>
            </div>
            <div className="prices">
                <p className="product-description price">R$ 179,90</p>
                <p className="">ou em até 10x sem juros!</p>
            </div>

            <div className="quantidade">
                <p>Quantidade</p>
                <select name="" id="">1
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

        <button type='submit' onClick={handleSubmit} className='buy-btn'>Comprar</button>
        </div>

        
        </div>


  )
}

export default Calca