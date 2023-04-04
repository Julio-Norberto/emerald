import { useContext, useState } from 'react'
import { UserCircle, Envelope, Key } from 'phosphor-react'
import { Message } from '../../components/Message'
import { Context } from '../../contexts/UserContext.js'

import './Register.css'
import Loading from '../../components/Loading'

export default function Register() {

  const [login, setLogin] = useState<string>('')
  const [name, setName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPass] = useState()
  const [loading, setLoading] = useState(false)

  const { register } = useContext(Context)

  async function handleRegister(e: any) {
    e.preventDefault()
    setLoading(true)
    await register(name!, login!, password!, confirmPassword!)
    setLoading(false)
  };

  return (
      <div className='register-container'>
      <Message /> <br />
          <form className='form-card'>
              <h2>Registre-se na nossa plataforma!</h2>
              <div className='div-input'>
                  <label className='align'>Seu nome <UserCircle size={20} style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setName(e.target.value)} type="text" name="name" id="name" placeholder='Digite o seu nome...' />
              </div>

              <div className='div-input'>
                  <label className='align'>Seu Login <Envelope style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setLogin(e.target.value)} value={login} type="text" name="login" id="login" placeholder="Digite o seu Login..." />
              </div>

              <div className='div-input'>
                  <label className='align'>Sua senha <Key style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Digite sua senha..." />
              </div>

              <div className='div-input'>
                  <label className='align'>Confirme sua senha <Key style={{ marginLeft: 10 }} /> </label>
                  <input onChange={(e: any) => setConfirmPass(e.target.value)} type="password" placeholder="Digite novamente sua senha..." />
              </div>
              <button onClick={(e) => handleRegister(e)} className='btn-register'> { loading ? <Loading /> : 'Registrar' } </button>

              <p className='login-link-p'>Já possui conta? <a className='login-link' href="/login">Fazer Login</a> </p>
          </form>
      </div>
  )
}
