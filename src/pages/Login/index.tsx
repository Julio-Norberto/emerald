import { useState, useContext } from 'react'
import { Envelope, Key } from 'phosphor-react'
import { Context } from '../../contexts/UserContext'
import { Message } from '../../components/Message'
import './Login.css'

export default function Login() {
  const [loginUser, setloginUser] = useState()
  const [password, setPassword] = useState()
  const { login } = useContext(Context)

  async function handleLogin() {
    login(loginUser!, password!)
  }

  return (
    <div className='login-container'>
      <Message /> <br />
      <form className='form-card, login-form-card'>

        <div className='login-title-div'>
            <h2 className='login-title'>Faça Login e aproveite o Emerald!</h2>
        </div>

        <div className='div-input'>
            <label className='align'>Seu Login <Envelope style={{ marginLeft: 10 }} /> </label>
            <input onChange={(e: any) => setloginUser(e.target.value)} type="text" name="loginUser" id="loginUser" placeholder="Digite o seu login..." />
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
