import StoreNavbar from '../components/StoreNavbar'
import { Link, useParams } from 'react-router-dom'
import { produtos } from './Store'
import { useState } from 'react'


import './PaginaProduto.css'


const PaginaProduto = () => {

  const {id} = useParams()
  const product = produtos.map((item) => item.id === parseInt(id) ? item : null).filter(e => e !== null)[0]
  
  const ChangePage = (e) =>{
    e.preventDefault()
    window.location=`/compra/${id}`
  }
  
  const [ activeButton, setActiveButton ] = useState( false )
  const changeColor = (id) => {
    setActiveButton(id)

  }

  const [ positivo, setPositivo ] = useState(1)
  {positivo < 1 || positivo === 6? setPositivo(1) : ''}



  return (
    <div className="individual-produto-container">
      <StoreNavbar />
      <div className="produto-container">
            <div className="produto-content">
                <p className="produto-description name"> {product.nome} </p>  
                  <img src={product.imagem} alt="" className='produto-imagem'/>
                <p className="produto-description price"> R${product.preco} </p>
            </div>

        <div className="produtos">
            <div className="empresa">
                  <p>Vendido e entregue por <Link className='company'>{product.empresa}</Link></p>
              </div>
              <div className="prices">
                  <p className="produto-description price"> R${product.preco} </p>
                  <p className="">ou em até 10x sem juros!</p>
              </div>
             <div className="select-drescription">
                <div className="quantidade">
                    <p>Quantidade</p>
                  <div className="touch-elements">
                    <button onClick={() => setPositivo(positivo - 1)} className='negativo-button'>-</button>
                    <p className='quantidade-numero'>{positivo}</p>
                    <button onClick={() => setPositivo(positivo + 1)} className='positivo-button'>+</button>
                  </div>
                </div>
              <div className="tamanho">
                  <p>Tamanho</p>
                <div className="size-btns">

                  {(product.tamanho).map((size, index) => (
                    <button key={index} className={activeButton === index ? 'active' : 'btn'} onClick={() => changeColor(index)}>{size}</button>
                  ))}

                </div>
              </div>
          </div>
          <button type='submit' className='buy-btn' onClick={ChangePage}>Comprar</button>
        </div>
        </div>
    </div>
  )
}

export default PaginaProduto