import StoreNavbar from '../components/StoreNavbar'
import calca from '../assets/calça-cargo.png'
import camiseta from '../assets/camiseta-independent.png'
import moletom from '../assets/moletom-santa-cruz.png' 
import tenis from '../assets/tenis-new-balance.png' 
import StoreFooter from '../components/StoreFooter'

import './Store.css'

const Store = () => {

  const productPage = () =>{
    window.location='./produto'
  }
  return (
    <div className='store-container'>
    <div className='bg-shop'></div>  
    <StoreNavbar />
      <h1 className='store-title'>PRODUTOS</h1>
      <div className="carrossel">
        <div className="products-content">
          <p className='product-description'>Calça Cargo</p>
          <div className="product-img">
            <img src={calca} alt="Calça Cargo" className='product' onClick={productPage}/>
          </div>
          <p className='product-description'>R$ 149,90</p>
        </div>
        
        <div className="products-content">
          <p className='product-description'>Camiseta Independent</p>
          <div className="product-img">
            <img src={camiseta} alt="Camiseta-Independent" className='product' onClick={productPage}/>
          </div>
          <p className='product-description'>R$ 80,00</p>
        </div>
        
        <div className="products-content">
          <p className='product-description'>Moletom Santa Cruz</p>
          <div className="product-img">
            <img src={moletom} alt="Camiseta-Independent" className='product' onClick={productPage}/>
          </div>
          <p className='product-description'>R$ 199,90</p>
        </div>
        
        <div className="products-content">
          <p className='product-description'>New Balance 850</p>
          <div className="product-img">
            <img src={tenis} alt="Camiseta-Independent" className='product' onClick={productPage}/>
          </div>
          <p className='product-description'>R$ 80,00</p>
        </div>
        
      </div>

      <StoreFooter />
    </div>
        

  )
}

export default Store