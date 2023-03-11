import { useState, useEffect } from 'react'
import './formModal.css'

type FormModalProps = {
  id: string | undefined
}

export const FormModal: React.FC<FormModalProps> = ({id}: FormModalProps) => {
  const [destination, setDestination] = useState()
  const [price, setPrice] = useState()

  useEffect(() => {
    async function handleSearchData() {
      return
    }

    handleSearchData()
  }, [id])

  function closeModal() {
    const modal = document.querySelector('#modal')
    modal?.classList.add('hide')
  }

  return(
    <>
    <form className="form">

      <div className="input_container">
          <label htmlFor="amount">Valor:</label>
          <input value='' onChange={(e:any) => setDestination(e.target.value)} type="text" name='amount' placeholder='Novo valor...' />
      </div>

      <div className="input_container">
          <label htmlFor="expanseType">Tipo:</label>
          <input value='' onChange={(e:any) => setPrice(e.target.value)} type="text" name='expanseType' placeholder='Novo tipo...' />
      </div>

      <div className="input_container">
          <label htmlFor="type">Categoria:</label>
          <input value='' onChange={(e:any) => setDestination(e.target.value)} type="text" name='type' placeholder='Nova categoria...' />
      </div>

      <div className="input_container">
          <label htmlFor="date">Data:</label>
          <input value='' onChange={(e:any) => setDestination(e.target.value)} type="text" name='date' placeholder='Nova data...' />
      </div>

      <div className="input_container">
          <label htmlFor="description">Descrição:</label>
          <input value='' onChange={(e:any) => setDestination(e.target.value)} type="text" name='description' placeholder='Nova descrição...' />
      </div>
      <input type="submit" value='Salvar' />

    </form>
    <button className='btn-close' onClick={closeModal} >Cancelar</button>
    </>
  )
}
