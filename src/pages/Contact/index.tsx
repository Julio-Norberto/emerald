import './Contact.css'
import contact from '../../assets/contact.svg'
import { WhatsappLogo, Envelope, InstagramLogo, LinkedinLogo, TelegramLogo } from 'phosphor-react'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

export default function Contact() {
  return (
    <div className='contact-container'>
      <Menu />
      <div className="contact-content">
        <div className="contact-infos">
          <div className='texts-contact'>
            <h1>Entre em contato comigo!</h1>
            <p className='subtitle'>Você pode entrar em contato comigo através de um dos canais abaixo ou até mesmo usando as minhas redes socias!</p>
          </div>

          <div className="social-icons-contact">
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              target="_blank"
              href="https://www.linkedin.com/in/julio-norberto/">
              <LinkedinLogo style={{ marginRight: '8px' }} size={32} color="#01C38D" />
              julio-norberto
            </a>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              target="_blank"
              href="https://www.instagram.com/julionorberto_s/">
              <InstagramLogo style={{ marginRight: '8px' }} size={32} color="#01C38D" />
              @julionorberto_s
            </a>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              target="_blank"
              href="https://wa.me/5581997187061">
              <WhatsappLogo style={{ marginRight: '8px' }} size={32} color="#01C38D" />
              (81) 99718-7061
            </a>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              target="_blank"
              href="https://criarmeulink.com.br/u/1677678142">
              <TelegramLogo style={{ marginRight: '8px' }} size={32} color="#01C38D" />
              (81) 99718-7061
            </a>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              target="_blank"
              href="https://criarmeulink.com.br/u/1677678220">
              <Envelope style={{ marginRight: '8px' }} size={32} color="#01C38D" />
              contato@julionorberto.tech
            </a>
          </div>
        </div>

        <div className="contact-image">
          <img src={contact} alt="contact us image" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
