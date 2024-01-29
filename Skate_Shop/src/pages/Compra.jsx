import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { produtos } from './Store'
import { VscArrowCircleLeft } from "react-icons/vsc";

import StoreNavbar from '../components/StoreNavbar'

import './Compra.css'

const Compra = () => {
    const { id } = useParams()
    const product = produtos.map((item) => item.id === parseInt(id) ? item : null).filter(e => e !== null)[0]

    const checkCEP = (e) =>{
        const cep = e.target.value.replace(/\D/g, '');
        {cep.length === 0 ? alert('INSIRA SOMENTE NÚMEROS DO CEP') : ''}

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
            res => res.json()).then(
                data => {
                    console.log(data)
                    setValue('rua', data.logradouro)
                    setValue('bairro', data.bairro)
                    setValue('cidade', data.localidade)
                
            })
    }

    const { register, handleSubmit, setValue} = useForm()

    const [ step, setStep ] = useState('moradia')
    
    const avancar = () =>{
        setStep('pagamento')
    }

    const pagamento = () =>{
        {cartaoNumber === '' ? alert('Insira o número do cartão!') : alert("Sinto muito, esse produto está fora de estoque")}
        
    }
    const onSubmit = (e) =>{
        e.preventDefault()
    }
    
    const [ cartaoNumber, setCartaoNumber ] = useState('')
    
    const handleInputFiled = () =>{
        setCartaoNumber(!cartaoNumber)
        console.log(!cartaoNumber)
    }

return (
<div className="compra-produto-container">
<StoreNavbar />
<div className="compra">
<div className="compra-produto-content">
    <p className="compra-produto-description name">{product.nome}</p>  
        <img src={product.imagem} alt="" className='produto-imagem'/>
    <p className="compra-produto-description price "> </p>
</div>

<div className="formulario">
    <h2 className='compra-produto-description compra-price'>{product.preco}
        <p className="compra-pric">ou em até 10x sem juros!</p>
    </h2>
    <form action="" className='compra-form' onSubmit={handleSubmit(onSubmit)} >
        {step === 'moradia' && (
        <>
            <label htmlFor="cep"> 
                <input type="text" {...register('cep')} name='cep' className='input-cep input' placeholder='CEP ( Somente os números... )' onBlur={checkCEP} maxLength={8} required />
            </label>

            <label htmlFor="bairro"> 
                <input type="text" {...register('bairro')} name='bairo' className='input-bairro input' placeholder='Nome do bairo...' required />
            </label>

            <label htmlFor="rua">
                <input type="text" {...register('rua')} name='rua' className='input-rua input' placeholder='Nome da rua...' autoComplete='hello' required/>
            </label>

            <div className="number-complement">

                <label htmlFor="number">
                    <input type="text" {...register('numero')} name='numero' className='input-numero input' placeholder='Número...' maxLength={4} required/>
                </label>

                <label htmlFor="complemento">
                    <input type="text" {...register('complemento')} name='complemento' className='input-complemento input' placeholder='Complemento...' required/>
                </label>

            </div>  

            <label htmlFor="cidade"> 
                <input type="text" {...register('cidade')} name='cidade' className='input-cidade input' placeholder='Cidade...' required/>
            </label>

            <button type='submit' className='final-btn avancar' onClick={avancar}>Avançar</button>
        </>
    )}
        
    {step === 'pagamento' && (
    <>
        <VscArrowCircleLeft className='voltar-button' onClick={() => setStep('moradia')}/>

        <label htmlFor="">
            <input type="text" className='input-numero-cartao input' placeholder='Número do cartão...' onChange={handleInputFiled} required/>
        </label>    

        <div className="number-cvc">
            <label htmlFor="">
                <input type="text" className='input-validade input' placeholder='Valid...(mm/aa)' maxLength={5} required/>
            </label>

            <label htmlFor="">
                <input type="text" className='input-cvc input' placeholder='CVC' maxLength={3} required/>
            </label>
        </div>

        <label htmlFor="">
            <input type="text" className='input-nome-cartao input' placeholder='Nome impresso no cartão...' required/>
        </label>
        <label htmlFor="">
            <input type="text" className='input-cpf input' placeholder='Seu CPF...' maxLength={11} required/>
        </label>
            <button type='submit' className='final-btn pagamento' onClick={pagamento}>Adquirir</button>:
    </>
    )}
    </form>
</div>
</div>
</div>

  )
}

export default Compra