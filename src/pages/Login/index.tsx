import './Login.css'
import { Envelope, Key } from 'phosphor-react'

export default function Login() {
    return (
        <div className='login-container'>
            <form className='form-card' action="/login" method='post'>

                <div className='login-title-div'>
                    <h2 className='login-title'>Faça Login e aproveite o Emerald!</h2>
                </div>
                
                <div className='div-input'>
                    <label className='align'>Seu e-mail <Envelope style={{ marginLeft: 10 }} /> </label>
                    <input type="text" name="email" id="email" placeholder="Digite o seu e-mail..." />
                </div>

                <div className='div-input'>
                    <label className='align'>Sua senha <Key style={{ marginLeft: 10 }} /> </label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha..." />
                </div>
                <input className='btn-register-login' type="submit" value="Registrar" />
            </form>
        </div>
    )
}