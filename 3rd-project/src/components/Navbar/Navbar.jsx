import logo from '/src/assets/nav-logo.svg'
import './Navbar.css'

export default function Navbar()
{
    return (
        <nav>
            <img src = {logo} className='logo'></img>
        </nav>
    )
    
}