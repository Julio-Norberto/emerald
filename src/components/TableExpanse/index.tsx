import './tableExpanse.css'
import api from '../../utils/api'
import { useEffect, useState } from 'react'
import { Trash, Pencil } from 'phosphor-react'
import { useFlashMessages } from '../../hooks/useFlashMessages.js'
import { useExpanse } from '../../hooks/useExpanse.js'
import React from 'react'

type tableComponent = {
  title: string
  type?: string
  action: boolean
  changed: boolean
}

interface dataExpanse {
  _id?: string
  amount: string,
  type: string,
  expanseType: string,
  date: string,
  description: string
}

export const TableExpanse: React.FC<tableComponent> = ({ type, title, action, changed }) => {
  const [data, setData] = useState<dataExpanse[]>()
  const [deleted, setDeleted] = useState(false)
  const { setFlashMessage } = useFlashMessages()
  const { change } = useExpanse()

  useEffect(() => {
    async function fetchUserExpanses() {
      const token = localStorage.getItem('token')

      await api.get('/expanses', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`
        }
      }).then((response) => {
        setData(response.data)
      }).catch(err => console.log(err))
    }

    fetchUserExpanses()

    return () => {
      setData([])
    }
  }, [deleted, changed])

  async function handleDelete(id: string) {
    const token = localStorage.getItem('token')

    await api.delete(`/expanses/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token!)}`
      }
    })

    setFlashMessage('Dado excluído com sucesso!', 'success')
    setDeleted(!deleted)
  }

  return (
    <div className='expansive-table'>
      <h2 style={{ marginBottom: '30px' }} > {title} </h2>
      <table>
        <thead>
        <tr>
            <th>Data</th>
            <th>Categoria</th>
            <th>Valor</th>
            { !type ? <th> Tipo </th> : '' }
            <th>Descrição</th>
            { action ? <th>Ações</th> : '' }
        </tr>
        </thead>
        { data?.map((expanses, index) => (
          type && expanses.expanseType === type ? (
            <tbody key={index}>
            <tr >
              <td align='center' > { expanses.date } </td>
              <td align='center'> {expanses.type} </td>
              <td align='center'> { expanses.amount } R$ </td>
              { !type ? <td align='center'> {expanses.expanseType} </td> : '' }
              { expanses.description ? <td align='center'> {expanses.description} </td> : '' }
              { action ? <td align='center'> <button onClick={() => handleDelete(expanses._id!)}> {<Trash width={25} height={25} />} </button> <button> {<Pencil width={25} height={25} />} </button> </td> : '' }
            </tr>
          </tbody>
          ) : !type ? (
            <tbody key={index}>
            <tr >
              <td align='center' > { expanses.date } </td>
              <td align='center'> {expanses.type} </td>
              <td align='center'> { expanses.amount } R$ </td>
              <td align='center'> {expanses.expanseType} </td>
              <td align='center'> {expanses.description} </td>
              { action ? <td align='center'> <button onClick={() => handleDelete(expanses._id!)} > {<Trash width={25} height={25} />} </button> <button> {<Pencil width={25} height={25} />} </button> </td> : '' }
            </tr>
          </tbody>
          ) : ''
        )) }
      </table>
    </div>
  )
}
