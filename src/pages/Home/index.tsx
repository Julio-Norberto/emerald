import './Home.css'

import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import WhyUs from '../../components/WhyUs'
import CardSections from '../../components/CardSections'
import Footer from '../../components/Footer'

import homeImg from '../../assets/home_image.svg'

export default function Home() {
    return (
        <div className='container'>
            <Menu />
            
            <div className='home-container'>

                <div className='home-text'>
                    <h1 className='home-title'>Suas finanças são uma jóia rara e te ajudamos a lapidá-las</h1>

                    <p>
                        O Emerald te ajuda a organizar suas finanças de forma eficiente e prática, tudo isso usando os melhores recursos que a tecnologia pode oferecer. Com o Emerald você pode acompanhar suas despesas direto da plataforma e em tempo real através de gráficos que te mostram onde você tem gasto o seu dinheiro ou até mesmo gerar relatórios em PDF para montar suas próprias planilhas e registros.
                    </p>

                    <div className='btn-home'>
                        <a className='btn-home-link' href="">Get Started</a>
                    </div>
                </div>

                <div className='home-img'>
                    <img className='img-principal' width={700} src={homeImg} alt="" />
                </div>

            </div>

            <WhyUs />
            <CardSections />
            <Footer />

            <div className='gradient-circle' />
            <div className='gradient-circle2' />
            
        </div>
    )
}