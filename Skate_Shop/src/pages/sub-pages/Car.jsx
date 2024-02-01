import StoreNavbar from '../../components/StoreNavbar'
import { produtos } from '../Store' 
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

import './Car.css' 

const Car = () =>{

    const {id} = useParams()
    const produto = produtos.map((item) => item.id === parseInt(id) ? item : null).filter(e => e !== null)[0]

    const [ positivo, setPositivo ] = useState(1)
    {positivo < 1 || positivo === 6 ? setPositivo(1): ''}
7
    const valorTotal = parseInt(produto.preco) * positivo
    const frete = 10
    const handleRemoveItem = () =>{
        console.log('Item removido do carrinho')
    }

    const cupomDesconto = () =>{
        return <input type="text" placeholder='Insira seu cupom'/>
    }

    return(
        <>
            <StoreNavbar />
            <h1 className='store-title carrinho-title'>CARRINHO DE COMPRAS</h1>
            <div className="carrinho-section">
                <div className="carrinho-compra">
                    <table className='product-descript'>
                        <tbody className='dad'>
                            <tr className='table-row'>
                                <td className='descrp titles'>PRODUTO</td>
                                <td className='descrp'>PREÇO</td>
                                <td className='descrp'>QUANTIDADE</td>
                                <td className='descrp'>TOTAL</td>
                            </tr>
                            <tr className=''>
                                <td className='descrp'>
                                    <img src={produto.imagem} alt="" className='imagem-produto'/>
                                    <p className='produto-nome'>{produto.nome}</p>
                                </td>
                                <td className='descrp'>R${produto.preco}</td>
                                <td className='quantidade-produto'>
                                    <div className="touch-elements">
                                        <button onClick={() => setPositivo(positivo - 1)} className='negativo-button'>-</button>
                                        <p className='quantidade-numero'>{positivo}</p>
                                        <button onClick={() => setPositivo(positivo + 1)} className='positivo-button'>+</button>
                                    </div>
                                </td>
                                <td className='descrp'>
                                    R${valorTotal},00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="remove-item-button">
                        <button className="remove-item-btn" onClick={handleRemoveItem}><p className='remove-item'>x</p></button>
                    </div>
                </div>

                <div className="resumo-carrinho">
                    <p className='resumo-compra'>Resumo da compra</p>
                    <div className="resumo">

                        <div className="resumo-description">
                            <p className='compra-desc'>Sub-total:</p>   
                            <p className='compra-desc'>Frete:</p>
                        </div>
                        <div className="resumo-description-value">
                            <p className='compra-desc'>R${valorTotal}</p>
                            <p className='compra-desc'>R${frete},00</p>
                        </div>

                    </div>
                    
                    <Link className='descount-cumpon' onClick={() => cupomDesconto()}>Adicionar cupom de desconto</Link>
                    
                    <div className='resumo-value'>
                        <p className='compra-desc'>Total:</p>
                        <p className='compra-desc'>R${valorTotal + frete},00</p>
                    </div>
                <button type='submit' className='final-compra' onClick={(e) => {
                    e.preventDefault()
                    alert('Sinto muito, este produto não está disponível!')
                    }}>Finalizar Compra</button>
                </div>
            </div>
        </>
    )
}

export default Car

