import './Footer.css'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <p>Emerald 2022. Todos os direitos reservados.</p>

            <div className='social'>
                <a href=""> <InstagramLogo /> </a>
            </div>
        </footer>
    )
}