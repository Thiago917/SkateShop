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
                <Link to='/entrega' className='links-shop'>ENTREGA</Link>
                <Link to='/store' className='links-shop'>SHOP</Link>
                <img src={logo} className='logo' onClick={linkHome} />
                <Link to='/comunidade' className='links-shop'>COMUNIDADE</Link>
                <Link to='/contato' className='links-shop'>CONTATO</Link>
            </nav>
        </header>
    )
}

export default StoreNavbar;

