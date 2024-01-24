import calca from '../assets/calça-cargo.png'
import camiseta from '../assets/camiseta-independent.png'
import moletom from '../assets/moletom-santa-cruz.png' 
import tenis from '../assets/tenis-new-balance.png' 
import skate from '../assets/skate.png'
import touca from '../assets/touca-high.png'
// produtos

import StoreNavbar from '../components/StoreNavbar'
import StoreFooter from '../components/StoreFooter'
// componentes


import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";
// funções

import './Store.css'
// estilos

  export const produtos = [
  {
    id: 1,
    nome: 'Calça Cargo Caqui',
    preco:'R$ 119,90',
    imagem: calca,
    empresa: 'Mizac',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },
  
  {
    id: 2,
    nome: 'Camiseta Independent',
    preco: 'R$ 79,90',
    imagem: camiseta,
    empresa: 'Indepent Store',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },
  
  {
    id: 3,
    nome: 'Moletom Santa Cruz',
    preco: 'R$ 199,90',
    imagem: moletom,
    empresa: 'Santa Cruz',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },
  
  {
    id: 4,
    nome: 'Tenis New Balance',
    preco: 'R$ 800,00',
    imagem: tenis,
    empresa: 'New Balance',
    tamanho: ['36', '37', '38', '39', '40','41', '42'],
  },
  {
    id: 5,
    nome: 'Skate Astronauta',
    preco: 'R$ 399,90',
    imagem: skate,
    empresa: 'Sk8 Store',
    tamanho: ['36', '37', '38', '39', '40','41', '42'],
  },
  { 
    id: 6,
    nome: 'Touca High Company',
    preco: 'R$ 149,90',
    imagem: touca,
    empresa: 'High Company',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },    

]
const Store = () => {
  const carousel = useRef( null )
    
  const leftClick = (e) =>{
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const rightClick = (e) =>{
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }
  

  return (
    <div className='store-container'> 
    <StoreNavbar />
      <h1 className='store-title'>PRODUTOS</h1>
      <div className="store">
        <VscArrowCircleLeft className='left-arrow' onClick={leftClick} />
      <div className="carrossel" ref={carousel}>

      {produtos.map((item) => {const {id, nome, preco, imagem} = item;
        return(
          <div className="products-content" key={id}>

              <div className="product-img">
                <Link to={`/produto/${item.id}`}> 
                  <img src={imagem} alt={nome} className='produto'  />
                </Link>
              </div>
            <div className="info">
              <p className='product-description name'>{nome}</p>
              <p className='product-description preco'>{preco}</p>
            </div>

          </div>
            )
          })}
          </div>
          <VscArrowCircleRight className='right-arrow' onClick={rightClick}/>
          </div>
      <StoreFooter />
    </div>
  )
}

export default Store