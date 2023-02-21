import { useState, useContext } from 'react'
import { Envelope, Key } from 'phosphor-react'
import { Context } from '../../contexts/UserContext'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { login } = useContext(Context)

  async function handleLogin() {
    login(email!, password!)
  }

  return (
    <div className='login-container'>
      <form className='form-card, login-form-card'>

        <div className='login-title-div'>
            <h2 className='login-title'>Faça Login e aproveite o Emerald!</h2>
        </div>

        <div className='div-input'>
            <label className='align'>Seu e-mail <Envelope style={{ marginLeft: 10 }} /> </label>
            <input onChange={(e: any) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Digite o seu e-mail..." />
        </div>

        <div className='div-input'>
            <label className='align'>Sua senha <Key style={{ marginLeft: 10 }} /> </label>
            <input onChange={(e: any) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Digite sua senha..." />
        </div>
        <input onClick={handleLogin} className='btn-register-login' type="button" value="Login" />
      </form>
    </div>
    )
}
