import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu-container'>
            <div className='logo'>
                <h1 className='logo-gradient'>Emerald</h1>
            </div>

            <div className='menu'>
                <ul>
                    <li>
                        <Link to=''>Contato</Link>
                    </li>

                    <li>
                        <Link to=''>Donate</Link>
                    </li>

                    <li>
                        <Link to=''>Sobre</Link>
                    </li>

                    <li>
                        <Link className='get-started' to=''>Get Started</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}