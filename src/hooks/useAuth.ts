import api from '../utils/api'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useFlashMessages } from './useFlashMessages.js'

export interface IUser {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export const useAuth = () => {

  const { setFlashMessage } = useFlashMessages()

  const register = async(name: string, email: string, password: string, confirmPassword: string) => {
    let msgText = 'Cadastro realizado com sucesso!'
    let msgType = 'success'

    try {

      const data = await api.post('/register', {
        name,
        email,
        password,
        confirmPassword
      })
        .then((response) => {
          return response.data
        })
        setFlashMessage(msgText, msgType)
        console.log(data)

    } catch(err: any) {
      let msgText = err.response.data.message
      let msgType = 'err'

      setFlashMessage(msgText, msgType)
    }
  }

  return { register }

}
