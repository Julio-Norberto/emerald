import './tableExpanse.css'
import api from '../../utils/api'
import { useEffect, useState } from 'react'
import { Trash, Pencil, File } from 'phosphor-react'
import { useFlashMessages } from '../../hooks/useFlashMessages.js'

import { pdfAmount } from '../../utils/pdf-amount'
import React from 'react'

type tableComponent = {
  title: string
  type?: string
  action: boolean
  changed?: boolean
  height?: string
  maxHeight?: string
  showModal: boolean
}

export interface IDataExpanse {
  _id?: string
  amount: string,
  type: string,
  expanseType: string,
  date: string,
  description: string
}

export const TableExpanse: React.FC<tableComponent> = ({ type, title, action, changed, height, maxHeight, showModal }) => {
  const [data, setData] = useState<IDataExpanse[]>()
  const [id, setId] = useState<string | undefined>('')
  const [deleted, setDeleted] = useState(false)
  const { setFlashMessage } = useFlashMessages()

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

  function generatePdf() {
    if(data) {
      pdfAmount(data)
    }
  }

  async function hiddeOrShowModal(display: boolean, index: number) {
    setId(data![index]._id)
    const modal = document.querySelector('#modal')
    console.log(id)
    if(display) {
      modal?.classList.remove('hide')
    }
  }

  return (
    <>
    <h2 style={{ marginTop: '28px', textAlign: 'center' }} > {title} </h2>
    <div className='expansive-table' style={{ height: height }}>
      <div className='div-scroll' style={{ maxHeight: maxHeight }}>
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
              <td align='center'> R$ { expanses.amount } </td>
              { !type ? <td align='center'> {expanses.expanseType} </td> : '' }
              { expanses.description ? <td align='center'> {expanses.description} </td> : '' }
              { action ? <td align='center'> <button onClick={() => handleDelete(expanses._id!)}> {<Trash width={25} height={25} />} </button> </td> : '' }
            </tr>
          </tbody>
          ) : !type ? (
            <tbody key={index}>
            <tr >
              <td align='center' > { expanses.date } </td>
              <td align='center'> {expanses.type} </td>
              <td align='center'> R$ { expanses.amount } </td>
              <td align='center'> {expanses.expanseType} </td>
              <td align='center'> {expanses.description} </td>
            </tr>
          </tbody>
          ) : ''
        )) }
      </table>
      </div>

      { action ? '' : data!?.length > 0 ? <button onClick={generatePdf} className='btn-pdf'>Exportar PDF <File color='#fff' size={20} style={{ marginLeft: '10px' }} /> </button> : 'Nenhuma despesa cadastrada...' }
    </div>
    </>
  )
}
