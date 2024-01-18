import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'



import './StoreNavbar.css'

const StoreNavbar = () =>{
    return(
        <header className='first-section'>
            <nav className="navbar">
                <Link to='/entrega' className='links-shop'>ENTREGA</Link>
                <Link to='/store' className='links-shop'>SHOP</Link>
                    <img src={logo} className='logo' />
                <Link to='/comunidade' className='links-shop'>COMUNIDADE</Link>
                <Link to='/contato' className='links-shop'>CONTATO</Link>
            </nav>
        </header>
    )
}

export default StoreNavbar;

