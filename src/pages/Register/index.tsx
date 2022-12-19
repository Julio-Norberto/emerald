import './Register.css'
import { UserCircle, Envelope, Key } from 'phosphor-react'

export default function Register() {
    return (
        <div className='register-container'>
            <form className='form-card' action="/register" method='post'>
                <h2>Registre-se na nossa plataforma!</h2>
                <div className='div-input'>
                    <label className='align'>Seu nome <UserCircle size={20} style={{ marginLeft: 10 }} /> </label>
                    <input type="text" name="name" id="name" placeholder='Digite o seu nome...' />
                </div>

                <div className='div-input'>
                    <label className='align'>Seu e-mail <Envelope style={{ marginLeft: 10 }} /> </label>
                    <input type="text" name="email" id="email" placeholder="Digite o seu e-mail..." />
                </div>

                <div className='div-input'>
                    <label className='align'>Sua senha <Key style={{ marginLeft: 10 }} /> </label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha..." />
                </div>

                <div className='div-input'>
                    <label className='align'>Confirme sua senha <Key style={{ marginLeft: 10 }} /> </label>
                    <input type="password" name="password" id="password" placeholder="Digite novamente sua senha..." />
                </div>
                <input className='btn-register' type="submit" value="Registrar" />

                <p className='login-link-p'>Já possui conta? <a className='login-link' href="/login">Fazer Login</a> </p>
            </form>
        </div>
    )
}