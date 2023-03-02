import './Menu.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Menu() {
  const { authenticated } = useAuth()

    return (
        <div className='menu-container'>
            <div className='logo'>
                <Link style={{ textDecoration: 'none' }} to='/'> <h1 className='logo-gradient'>Emerald</h1> </Link>
            </div>

            <div className='menu'>
                <ul>
                    <li>
                        <Link to='/contato'>Contato</Link>
                    </li>

                    <li>
                        <Link to='/donate'>Donate</Link>
                    </li>

                    <li>
                        <Link to='/sobre'>Sobre</Link>
                    </li>

                    <li>
                      { authenticated ? <Link className='get-started' to='/dashboard' >Dashboard</Link> : <Link className='get-started' to='/register'>Get Started</Link> }
                    </li>
                </ul>
            </div>
        </div>
    )
}
