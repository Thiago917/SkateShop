import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import carrinho from '../assets/carrinho.svg'
import { useState } from 'react';


import './StoreNavbar.css'

const StoreNavbar = () =>{
    const [ produto, setProduto ] = useState(0)
    return(
        <header className='first-section first-section-change'>
            <nav className="navbar">
                <Link className='links-shop'>ENTREGA</Link>
                <Link to='/store' className='links-shop'>SHOP</Link>
                <Link to='/introStore' className='logo'><img src={logo} className='logo'/></Link>
                <Link className='links-shop'>COMUNIDADE</Link>
                <Link className='links-shop'>CONTATO</Link>
                <div className="carrinho-shop">
                    <img src={carrinho} className='carrinho' />
                    <p className='carrinho-item'>{produto}</p>
                </div>
            </nav>
        </header>
    )
}

export default StoreNavbar;

