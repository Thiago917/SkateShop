
import StoreNavbar from '../components/StoreNavbar'


import './IntroStore.css'

const switchPage = () =>{
  window.location.href='./store'
}
const IntroStore = () => {
  return (
    
    <div className="section1">
      <StoreNavbar />
      <div className="content">
        <h1 className='title intro-store-title'>Flip - Skate Shop</h1>
        <p className='intro-content'> Deslize com o estilo das ruas, descubra a autenticidade do skate em cada peça.</p>
        
      </div>
      <button type='submit' className='shop-now-btn' onClick={switchPage}>Shop Now</button>
    </div>
  )
}

export default IntroStore