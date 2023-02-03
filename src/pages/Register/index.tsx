import { useContext, useState } from 'react'
import { UserCircle, Envelope, Key } from 'phosphor-react'
import { Context } from '../../contexts/UserContext.js'
import './Register.css'

export default function Register() {

  const [email, setEmail] = useState<string>()
  const [name, setName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPass] = useState()

  const { register } = useContext(Context)

  function handleRegister() {
    if(name && email && password && confirmPassword) {
      register({ name, email, password, confirmPassword })
    }
  }

  return (
      <div className='register-container'>
          <form className='form-card'>
              <h2>Registre-se na nossa plataforma!</h2>
              <div className='div-input'>
                  <label className='align'>Seu nome <UserCircle size={20} style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setName(e.target.value)} type="text" name="name" id="name" placeholder='Digite o seu nome...' />
              </div>

              <div className='div-input'>
                  <label className='align'>Seu e-mail <Envelope style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setEmail(e.target.value)} type="text" name="email" id="email" placeholder="Digite o seu e-mail..." />
              </div>

              <div className='div-input'>
                  <label className='align'>Sua senha <Key style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Digite sua senha..." />
              </div>

              <div className='div-input'>
                  <label className='align'>Confirme sua senha <Key style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setConfirmPass(e.target.value)} type="password" placeholder="Digite novamente sua senha..." />
              </div>
              <input onClick={handleRegister} className='btn-register' value="Registrar" type='button' />

              <p className='login-link-p'>Já possui conta? <a className='login-link' href="/login">Fazer Login</a> </p>
          </form>
      </div>
  )
}
