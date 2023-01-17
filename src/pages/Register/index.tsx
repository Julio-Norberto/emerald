import { useState } from 'react'
import { UserCircle, Envelope, Key } from 'phosphor-react'
import { auth } from '../../services/firebaseConnection.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import './Register.css'

export default function Register() {

  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [confirmPass, setConfirmPass] = useState()
  const navigate = useNavigate()

  // async function HandleRegister() {
  //   if(email && password) {
  //     if(password === confirmPass) {
  //       await createUserWithEmailAndPassword(auth, email, password)
  //         .then(() => {
  //           alert('Usuário criado com sucesso!')
  //           navigate('/dashboard')
  //         }).catch((err) => console.log(err))
  //     } else {
  //       alert('As senhas não coincidem')
  //     }
  //   } else {
  //     alert('Preencha todos os campos')
  //   }
  // }

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
              <input className='btn-register' value="Registrar" type='button' />

              <p className='login-link-p'>Já possui conta? <a className='login-link' href="/login">Fazer Login</a> </p>
          </form>
      </div>
  )
}
