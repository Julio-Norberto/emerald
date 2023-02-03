import api from '../utils/api'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export interface IUser {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export const useAuth = () => {

  const register = async(user: IUser) => {
    try {

      const data = await api.post('/register', user)
        .then((response) => {
          return response.data
        })

        console.log(data)

    } catch(err) {
      console.log(err)
    }
  }

  return { register }

}
