import api from '../utils/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFlashMessages } from './useFlashMessages.js'

export interface IUser {
  name: string,
  login: string,
  password: string,
  confirmPassword: string,
  token?: string
}

export const useAuth = () => {
  const [ authenticated, setAuthenticated ] = useState<boolean>(false)
  const { setFlashMessage } = useFlashMessages()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.stringify(token)}`
      setAuthenticated(true)
    }
  }, [])

  const register = async(name: string, login: string, password: string, confirmPassword: string) => {
    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    try {

      const data: IUser = await api.post('/register', {
        name,
        login,
        password,
        confirmPassword
      })
        .then((response) => {
          return response.data
        })

        setFlashMessage(msgText, msgType)
        await authUser(data)

    } catch(err: any) {
      let msgText = err.response.data.message
      let msgType = 'err'

      setFlashMessage(msgText, msgType)
    }
  }

  const login = async(login: string, password: string) => {
    let msgText = 'Usuário logado com sucesso!'
    let msgType = 'success'

    try {
      const data = await api.post('/login', {
        login,
        password
      }).then((response) => {
        return response.data
      })
      setFlashMessage(msgText, msgType)

      await authUser(data)
    } catch(err: any) {
      let msgText = err.response.data.message
      let msgType = 'err'

      setFlashMessage(msgText, msgType)
    }

  }

  const authUser = async(data: IUser) => {
    let msgText = 'Usuário autenticado com sucesso!'
    let msgType = 'success'

    setAuthenticated(true)

    localStorage.setItem('token', JSON.stringify(data.token))

    navigate('/dashboard')
    navigate(0)
    navigate('/dashboard')
  }

  return { authenticated, register, login }

}
