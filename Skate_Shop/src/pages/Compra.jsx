import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import StoreNavbar from '../components/StoreNavbar'
import { produtos } from './Store'

import './Compra.css'

const Compra = () => {
    const { id } = useParams()
    const product = produtos.map((item) => item.id === parseInt(id) ? item : null).filter(e => e !== null)[0]

    const { register, handleSubmit, setValue} = useForm()

    const finalButton = () =>{  
        alert('Sinto muito, esse produto está fora de estoque!')
    }

    const checkCEP = (e) =>{
        const cep = e.target.value.replace(/\D/g, '');
        {cep.length === 0 ? alert('INSIRA SOMENTE NÚMEROS DO CEP') : ''}

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
            res => res.json()).then(
                data=> {console.log(data)
                    setValue('rua', data.logradouro)
                    setValue('bairro', data.bairro)
                    setValue('cidade', data.localidade)
            })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <div className="compra-produto-container">
        <StoreNavbar />
        <div className="compra">

            <div className="compra-produto-content">
                <p className="compra-produto-description name"> {product.nome} </p>  
                    <img src={product.imagem} alt="" className='produto-imagem'/>
                <p className="compra-produto-description price"> {product.preco} </p>
            </div>

            <div className="formulario">
                        <h2 className='compra-produto-description compra-price'>{product.preco}
                            <p className="compra-pric">ou em até 10x sem juros!</p>
                        </h2>
                <form action="" className='compra-form' onSubmit={handleSubmit(onSubmit)} >

                    <label htmlFor="cep"> 
                        <input type="number" {...register('cep')} name='cep' className='input-cep input' placeholder='CEP ( Somente os números... )' onBlur={checkCEP} required />
                    </label>

                    <label htmlFor="bairro"> 
                        <input type="text" {...register('bairro')} name='bairo' className='input-bairro input' placeholder='Nome do bairo...' required />
                    </label>

                        <label htmlFor="rua">
                            <input type="text" {...register('rua')} name='rua' className='input-rua input' placeholder='Nome da rua...' autoComplete='hello' required/>
                        </label>

                    <div className="number-complement">
                        <label htmlFor="numero">
                            <input type="text" {...register('numero')} name='numero' className='input-numero input' placeholder='Número...' required/>
                        </label>
                        <label htmlFor="complemento">
                            <input type="text" {...register('complemento')} name='complemento' className='input-complemento input' placeholder='Complemento...' required/>
                        </label>
                    </div>  

                    <label htmlFor="cidade"> 
                        <input type="text" {...register('cidade')} name='cidade' className='input-cidade input' placeholder='Cidade...' required/>
                    </label>

                </form>
                <button type='submit' className='final-btn' onClick={finalButton}>Adquirir</button>
            </div>
        </div>
    </div>

  )
}

export default Compra