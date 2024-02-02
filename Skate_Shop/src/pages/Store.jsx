import calca from '../assets/calça-cargo.png'
import camiseta from '../assets/camiseta-independent.png'
import moletom from '../assets/moletom-santa-cruz.png' 
import tenis from '../assets/tenis-new-balance.png' 
import skate from '../assets/skate.png'
import touca from '../assets/touca-high.png'
import bermuda from '../assets/bermuda.png'
import tenis_puma from '../assets/tenis-puma.png'
// produtos

import StoreNavbar from '../components/StoreNavbar'
import StoreFooter from '../components/StoreFooter'
import carrinho from '../assets/carrinho.svg'

// componentes


import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";
import { useState } from 'react'
import axios from 'axios'
import { api } from '../provider'
// funções

import './Store.css'
// estilos

  export const produtos = [
  {
    id: 1,
    nome: 'Calça Cargo Caqui',
    preco: Math.floor(Math.random() * 200) +1+',00',
    imagem: calca,
    empresa: 'Mizac',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },
  
  {
    id: 2,
    nome: 'Camiseta Independent',
    preco: Math.floor(Math.random() * 100) +1+',00',
    imagem: camiseta,
    empresa: 'Indepent Store',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },
  
  {
    id: 3,
    nome: 'Moletom Santa Cruz',
    preco: Math.floor(Math.random() * 250) +1+',00',
    imagem: moletom,
    empresa: 'Santa Cruz',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },
  
  {
    id: 4,
    nome: 'Tenis New Balance',
    preco: Math.floor(Math.random() * 800) +1+',00',
    imagem: tenis,
    empresa: 'New Balance',
    tamanho: ['36', '37', '38', '39', '40','41', '42'],
  },
  {
    id: 5,
    nome: 'Skate Montado',
    preco: Math.floor(Math.random() * 400) +',00',
    imagem: skate,
    empresa: 'Sk8 Store',
    tamanho: ['36', '37', '38', '39', '40','41', '42'],
  },
  { 
    id: 6,
    nome: 'Tenis Puma Trinity',
    preco: Math.floor(Math.random() * 500) +',00',
    imagem: tenis_puma,
    empresa: 'Puma',
    tamanho: ['36', '37', '38', '39', '40','41', '42'],
  },
  { 
    id: 7,
    nome: 'Touca High Company',
    preco: Math.floor(Math.random() * 150) +',00',
    imagem: touca,
    empresa: 'High Company',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  }, 
  { 
    id: 8,
    nome: 'Bermuda Overcome',
    preco: Math.floor(Math.random() * 200) +',00',
    imagem: bermuda,
    empresa: 'Overcome',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  }, 
]
 

const Store = () => {
  const carousel = useRef()
    
  const leftClick = (e) =>{
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const rightClick = (e) =>{
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth

  }
  
  const [ cart, setCart ] = useState([])

  const fetchData = () =>{
    api.get('/carrinho').then((response) => console.log(response.data))
  }

    useEffect(() => {
      axios   
      fetchData()
    }, [])
  
    const handleAddItem = () =>{
      alert('Produto adicionado ao carrinho!')
      return setTimeout(window.location=`/carrinho/${produtos.id}`, 2500)
    }
    // const items = handleAddItem()

    // const queryItens = () =>{
    //   api.get('/carrinho').then((response) => {
    //     // console.log(response)
    //     fetchData()
    //   })
    // }""

  return (
  <div className='store-container'> 
  <StoreNavbar/>
  <div className="carrinho-shop">
    <img src={carrinho} className='carrinho' onClick={() => alert('Adicione um produto no carrinho!')}/>
  </div>
    <h1 className='store-title'>PRODUTOS</h1>
    <div className="store">
      <VscArrowCircleLeft className='left-arrow' onClick={leftClick} />
    <div className="carrossel" ref={carousel}>

    {produtos.map((item) => {const {id, nome, preco, imagem} = item;
      return(
        <div className="products-content" key={id}>

            <div className="product-img">
              <Link to={`/produto/${id}`}> 
                <img src={imagem} alt={nome} className='produto'  />
              </Link>
            </div>
          <div className="info">
            <p className='product-description name'>{nome}</p>
            <p className='product-description preco'>R${preco}</p>
          </div>
        <div className="add-carrinho">
          <button className='carrinho-btn' onClick={() => {
            alert('Produto adicionado ao carrinho') 
            return setTimeout(window.location=`/carrinho/${id}`, 3000)
            }}>
              Adicionar ao carrinho 
              <p className='add-icon'>+</p>
          </button>
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