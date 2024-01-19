import StoreNavbar from '../components/StoreNavbar'
import calca from '../assets/calça-cargo.png'
import camiseta from '../assets/camiseta-independent.png'
import moletom from '../assets/moletom-santa-cruz.png' 
import tenis from '../assets/tenis-new-balance.png' 
import StoreFooter from '../components/StoreFooter'

import './Store.css'
import { Link } from 'react-router-dom'


  export const produtos = [
  {
    id: 1,
    nome: 'Calça Cargo Caqui',
    preco:'R$119,90',
    imagem: calca,
    empresa: 'Mizac',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },

  {
    id: 2,
    nome: 'Camiseta Independent',
    preco: 'R$79,90',
    imagem: camiseta,
    empresa: 'Indepent Store',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },
  
  {
    id: 3,
    nome: 'Moletom Santa Cruz',
    preco: 'R$199,90',
    imagem: moletom,
    empresa: 'Santa Cruz',
    tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG'],
  },

  {
    id: 4,
    nome: 'Tenis New Balance',
    preco: 'R$800,00',
    imagem: tenis,
    empresa: 'New Balance',
    tamanho: ['36', '37', '38', '39', '40','41', '42'],
  },]


  const Store = () => {

  
  return (
    <div className='store-container'>
    <div className='bg-shop'></div>  
    <StoreNavbar />
      <h1 className='store-title'>PRODUTOS</h1>
      
          <div className="carrossel">
          <div className="products-content">
            <p className='product-description'>{produtos[0].nome}</p>
            <div className="product-img">
              <Link to={`/produto/${produtos[0].id}`}> 
                <img src={produtos[0].imagem} alt={produtos[0].nome} className='product'  />
              </Link>
          </div>
          <p className='product-description'>{produtos[0].preco}</p>
        </div>
        
        <div className="products-content">
          <p className='product-description'>{produtos[1].nome}</p>
          <div className="product-img">
            <Link to={`/produto/${produtos[1].id}`}>
              <img src={produtos[1].imagem} alt={produtos[1].nome} className='product' />
            </Link>
          </div>
          <p className='product-description'>{produtos[1].preco}</p>
        </div>
        
        <div className="products-content">
          <p className='product-description'>{produtos[2].nome}</p>
          <div className="product-img">
          <Link to={`/produto/${produtos[2].id}`}>
              <img src={produtos[2].imagem} alt={produtos[2].nome} className='product' />
            </Link>
          </div>
          <p className='product-description'>{produtos[2].preco}</p>
        </div>
        
        <div className="products-content">
          <p className='product-description'>{produtos[3].nome}</p>
          <div className="product-img">
          <Link to={`/produto/${produtos[3].id}`}>
            <img src={produtos[3].imagem} alt={produtos[3].nome} className='product' />
          </Link>
          </div>
          <p className='product-description'>{produtos[3].preco}</p>
        </div>
        
      </div>

      <StoreFooter />
    </div>
        

  )
}

export default Store