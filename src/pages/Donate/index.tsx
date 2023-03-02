import Menu from "../../components/Menu"
import Footer from "../../components/Footer"

import developer from '../../assets/developer.svg'
import qrcode from '../../assets/qrcode.png'

import './Donate.css'

export default function Donate() {
  return (
    <div className="donate-container">
      <Menu />
      <div className="donate-content">

        <div className="donate-text">
          <div className="donate-text-infos">
            <h1>Quer contruibuir com o projeto?</h1>
            <p>Sinta-se a vontade para fazer uma contruibuição para o projeto do Emerald. O Emerald é um sistema de controle financeiro totalmente gratuito, se você gosta de usar ele e quer contruibuir com o projeto, por favor sinta-se a vontade para fazer uma doação</p>
          </div>

          <div>
            <img className="qrcode" src={qrcode} alt="" />
          </div>
        </div>

        <div className="donate-img">
          <img src={developer} alt="" />
        </div>

      </div>
      <Footer />
    </div>
  )
}
