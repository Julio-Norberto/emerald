import './Footer.css'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <p>Emerald 2022. Feito por <a style={{ color: '#01C38D' }} className='ilustrations' target="_blank" href="https://github.com/Julio-Norberto">Júlio Norberto</a> | <a className='ilustrations' href="https://storyset.com/data">Data illustrations by Storyset</a></p>

            <div className='social'>
                <a target="_blank" href="https://www.instagram.com/julionorberto_s/"> <InstagramLogo size={32} color="#01C38D" /> </a>
                <a target="_blank" href="https://www.linkedin.com/in/julio-norberto/"> <LinkedinLogo size={32} color="#01C38D" /> </a>
                <a target="_blank" href=""> <WhatsappLogo size={32} color="#01C38D" /> </a>
            </div>
        </footer>
    )
}