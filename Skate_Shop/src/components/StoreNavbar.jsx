import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

import './StoreNavbar.css'

const StoreNavbar = () =>{
const linkHome = () => {
    window.location = './introStore'
}
    return(
        <header className='first-section first-section-change'>
            <nav className="navbar">
                <Link className='links-shop'>ENTREGA</Link>
                <Link to='/store' className='links-shop'>SHOP</Link>
                <Link to='/introStore' className='logo'><img src={logo} className='logo'/></Link>
                <Link className='links-shop'>COMUNIDADE</Link>
                <Link className='links-shop'>CONTATO</Link>
            </nav>
        </header>
    )
}

export default StoreNavbar;

