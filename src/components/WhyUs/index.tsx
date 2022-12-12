import './WhyUs.css'
import Card from '../Card'
import { ChartPie, Files, CoinVertical } from 'phosphor-react'

export default function WhyUs() {
    return (
        <div className='whyUs-container'>
            <div className='whyUs-title'>
                <h2>Porque usar o Emerald?</h2>
            </div>

            <div className='whyUs-cards'>
                <Card icon={ <ChartPie size={82} color='#01C38D' /> } title='Acompanhamento em Gráficos' description='Acompanhe todo o movimento do seu dinheiro através de gráficos intuitivos e atualizados em tempo real.' />
                <Card icon={ <Files size={82} color='#01C38D' /> } title='Geração de Relatórios' description='Gere e exporte seus próprios relatórios e faça seu próprio registro financeiro da forma que mais lhe agrada.' />
                <Card icon={ <CoinVertical size={82} color='#01C38D' /> } title='Processos automáticos' description='Chega de ficar fazendo contas de quanto gastou e quanto ainda tem, no Emerald todas as contas são feitas automaticamente para você.' />
            </div>

            <div className='gradient-circle-whyUs' />
        </div>
    )
}