import StoreNavbar from '../components/StoreNavbar'
import { Link, useParams } from 'react-router-dom'
import { produtos } from './Store'
import { useState } from 'react'


import './PaginaProduto.css'

const PaginaProduto = () => {

  const {id} = useParams()
  const product = produtos.map((item) => item.id === parseInt(id) ? item : null).filter(e=>e !== null)[0]

  const ChangePage = (e) =>{
    e.preventDefault()
    window.location=`/compra/${id}`
  }

  const [ activeButton, setActiveButton ] = useState( null )

  const changeColor = (index) =>[
    setActiveButton(index)
  ]

  const [ positivo, setPositivo ] = useState(1)
  {positivo < 1 ? setPositivo(1) : ''}

  return (
    <div className="individual-produto-container">
      <StoreNavbar />
      <div className="produto-container">
            <div className="produto-content">
                <p className="produto-description name"> {product.nome} </p>  
                <img src={product.imagem} alt="" className='produto-imagem'/>
                <p className="produto-description price"> {product.preco} </p>
            </div>

        <div className="produto">
            <div className="empresa">
                  <p>Vendido e entregue por <Link className='company'>{product.empresa}</Link></p>
              </div>
              <div className="prices">
                  <p className="produto-description price"> {product.preco} </p>
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
                  <button className={activeButton === 0 ? 'active' : 'btn'} onClick={() => changeColor(0)}>{product.tamanho[0]}</button>
                  <button className={activeButton === 1 ? 'active' : 'btn'} onClick={() => changeColor(1)}>{product.tamanho[1]}</button>
                  <button className={activeButton === 2 ? 'active' : 'btn'} onClick={() => changeColor(2)}>{product.tamanho[2]}</button>
                  <button className={activeButton === 3 ? 'active' : 'btn'} onClick={() => changeColor(3)}>{product.tamanho[3]}</button>
                  <button className={activeButton === 4 ? 'active' : 'btn'} onClick={() => changeColor(4)}>{product.tamanho[4]}</button>
                  <button className={activeButton === 5 ? 'active' : 'btn'} onClick={() => changeColor(5)}>{product.tamanho[5]}</button>
                  <button className={activeButton === 6 ? 'active' : 'btn'} onClick={() => changeColor(6)}>{product.tamanho[6]}</button>
                </div>
              </div>
          </div>
          <button type='submit' className='buy-btn' onClick={ChangePage}>Adquirir</button>
        </div>
        </div>
    </div>
  )
}

export default PaginaProduto