import './tableExpanse.css'
import api from '../../utils/api'
import { useEffect, useState } from 'react'
import { Trash, Pencil } from 'phosphor-react'

type tableComponent = {
  title: string
  type?: string
  action: boolean
}

interface dataExpanse {
  amount: string,
  type: string,
  expanseType: string,
  date: string,
  description: string
}

export const TableExpanse: React.FC<tableComponent> = ({ type, title, action }) => {
  const [data, setData] = useState<dataExpanse[]>()

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
  }, [])

  return (
    <div className='expansive-table'>
      <h2 style={{ marginBottom: '30px' }} > {title} </h2>
      <table border={1}>
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
              { action ? <td align='center'> <button> {<Trash width={25} height={25} />} </button> <button> {<Pencil width={25} height={25} />} </button> </td> : '' }
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
              { action ? <td align='center'> <button> {<Trash width={25} height={25} />} </button> <button> {<Pencil width={25} height={25} />} </button> </td> : '' }
            </tr>
          </tbody>
          ) : ''
        )) }
      </table>
    </div>
  )
}
