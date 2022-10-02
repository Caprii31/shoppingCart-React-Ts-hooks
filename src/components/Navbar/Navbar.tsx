import { Link } from 'react-router-dom'
import './index.scss'
import { FaShoppingCart } from 'react-icons/fa'

export const Navbar= () => {
    return (
        <header className="header">
            <div className="logo__container">
                <h1>Capri</h1>
            </div>
            <nav className="nav__items">
                <Link to='/' className="nav__items--link">Home</Link>
                <Link to='/store' className="nav__items--link">Store</Link>
                <Link to='/about' className="nav__items--link">About</Link>
                {/* <div className="shopping__cart">
            
                </div> */}
            </nav>
            
        </header>
    )
}