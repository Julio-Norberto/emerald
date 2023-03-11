import api from "../utils/api"

import { useFlashMessages } from '../hooks/useFlashMessages'
import { useState } from "react"

export const useExpanse = () => {
  const { setFlashMessage } = useFlashMessages()

  const registerExpanse = async(amount: string, expanseType: 'entrada' | 'saida', expanseCategory: string, date: string, description: string ) => {
    const token = localStorage.getItem('token')

    try {
      await api.post('/register/expanse', {
        amount,
        expanseType,
        type: expanseCategory,
        date,
        description
      }, {
        headers: {
          authorization: `Bearer ${JSON.parse(token!)}`
        }
      })
    } catch(err: any) {
      console.log(err)
      return setFlashMessage(err.response.data.message, 'err')
    }

    setFlashMessage('Registro cadastrado com sucesso!', 'success')
  }

  async function updateExpanses(amount: string, expanseType: 'entrada' | 'saida', expanseCategory: string, date: string, description: string, id: string) {

    const token = localStorage.getItem('token')

    try {
      await api.patch(`/expanses/${id}`, {
        amount,
        expanseType,
        type: expanseCategory,
        date,
        description
      }, {
      headers: {
        authorization: `Bearer ${JSON.parse(token!)}`
      }
      }).then((response) => response.data)
    } catch(err: any) {
      setFlashMessage(err.response.data.message, 'err')
    }
  }

  return { registerExpanse, updateExpanses }
}
