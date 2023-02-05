import api from '../utils/api'

import { useFlashMessages } from '../hooks/useFlashMessages'
import { useNavigate } from 'react-router-dom'

interface IRegisterExpanse {
  amount: string,
  expanseType: 'entrada' | 'saida',
  expanseCategory: string,
  date: string,
  description: string
}

export const registerExpanse = async (dataExpanse: IRegisterExpanse) => {
  const { setFlashMessage } = useFlashMessages()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  try {
    const data = await api.post('/register/espanse', dataExpanse, {
      headers: {
        Authorization: `Bearer ${JSON.stringify(token)}`
      }
    }).then((response) => {
      return response.data
    })
  } catch(err: any) {
    console.log(err)
    return setFlashMessage(err.response.data.message, 'err')
  }

  setFlashMessage('Dado cadastrado com sucesso!', 'success')
  navigate(0)
}
