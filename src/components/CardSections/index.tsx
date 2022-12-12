import './CardSections.css'
import CardSection from '../CardSection'
import man from '../../assets/man.svg'
import device from '../../assets/device.svg'
import macbook from '../../assets/macbook.svg'

export default function CardSections() {
    return (
        <div className='cardSections-container'>
            <CardSection image={man} title='Use o melhor do Emerald direto do seu navegador' description='Use o Emerald de qualquer do mundo sem precisar se preocupar em fazer download de absolutamente nada, o Emerald é leve e otimizado de forma que você possa usá-lo diretamente do seu navegador sem problemas. Organize suas finanças e relaxe.' />

            <CardSection direction='row-reverse' image={device} title='Seus dados de forma clara e intuitiva' description='Aproveite de nossas ferramentas de controle de finanças que exibem seus dados de forma extremamente intuitiva e visual, chega de 1 milhão de números espalhados e confusos na sua tela, acompanhe cada centavo através de gráficos bem elaborados que mostram suas finanças de forma organizada.' />
            
            <CardSection image={macbook} title='Todos os seus registros não apenas no digital, mas também em suas mãos' description='Tenha os seus registros de forma organizada não apenas no nosso Software, mas também em suas mãos. Com o Emerald você pode gerar relatórios para acompanhar suas finanças de forma fisíca e palpável, caso seja de sua preferência.' />
        </div>
    )
}