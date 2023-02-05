import api from "../utils/api"

import { useFlashMessages } from '../hooks/useFlashMessages'

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

  return { registerExpanse }
}
