import StoreNavbar from '../components/StoreNavbar'
import { Link, useParams } from 'react-router-dom'
import { produtos } from './Store'


import './PaginaProduto.css'

const PaginaProduto = () => {
  const {id} = useParams()
  const product = produtos.map((item) => item.id === parseInt(id) ? item : null).filter(e=>e !== null)[0]

  return (
    <div className="individual-produto-container">
      <StoreNavbar />
      <div className="produto-container">
            <div className="produto-content">
                <p className="produto-description name">
                    {product.nome}
                </p>
                <img src={product.imagem} alt="" />
                <p className="produto-description price">
                    R$ {product.preco}
                </p>
            </div>

        <div className="produto">
            <div className="empresa">
                  <p>Vendido e entregue por <Link className='company'>{product.empresa}</Link></p>
              </div>
              <div className="prices">
                  <p className="produto-description price">R$ {product.preco}</p>
                  <p className="">ou em até 10x sem juros!</p>
              </div>
             <div className="select-drescription">
                <div className="quantidade">
                    <p>Quantidade</p>
                    <select name="" id="">1
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

              <div className="tamanho">
                  <p>Tamanho</p>
                  <select name="" id="">
                      <option value="">{product.tamanho[0]}</option>
                      <option value="">{product.tamanho[1]}</option>
                      <option value="">{product.tamanho[2]}</option>
                      <option value="">{product.tamanho[3]}</option>
                      <option value="">{product.tamanho[4]}</option>
                      <option value="">{product.tamanho[5]}</option>
                      <option value="">{product.tamanho[6]}</option>
                  </select>
              </div>
          </div>
          <button type='submit' className='buy-btn'>Comprar</button>
        </div>
        </div>
    </div>
  )
}

export default PaginaProduto