import { useState, useEffect } from 'react'
import { useExpanse } from '../../hooks/useExpanse'
import api from '../../utils/api'
import './formModal.css'

type FormModalProps = {
  id: string | undefined
}

export const FormModal: React.FC<FormModalProps> = ({id}: FormModalProps) => {
  const [amount, setAmount] = useState<string>()
  const [expanseType, setExpanseType] = useState<'entrada' | 'saida'>('entrada')
  const [expanseCategory, setExpanseCategory] = useState<string>()
  const [date, setDate] = useState<string>()
  const [description, setDescription] = useState<string>()

  const { updateExpanses } = useExpanse()

  useEffect(() => {
    async function handleSearchData() {
      if(id) {
        await api.get(`/expanses/${id}`)
          .then((res) => {
            setAmount(res.data.amount)
            setExpanseType(res.data.ExpanseType)
            setExpanseCategory(res.data.type)
            setDate(res.data.date)
            setDescription(res.data.description)
          }).catch((err) => console.log(err))
      }

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
          <label htmlFor="destination">Valor:</label>
          <input value={amount ? amount : ''} onChange={(e:any) => setAmount(e.target.value)} type="text" name='destination' placeholder='Novo destino...' />
      </div>

      <div className="input_container">
          <label htmlFor="price">Tipo:</label>
          <input value={expanseType ? expanseType : ''} onChange={(e:any) => setExpanseType(e.target.value)} type="text" name='price' placeholder='Novo preço...' />
      </div>

      <div className="input_container">
          <label htmlFor="price">Categoria:</label>
          <input value={expanseCategory ? expanseCategory : ''} onChange={(e:any) => setExpanseCategory(e.target.value)} type="text" name='price' placeholder='Novo preço...' />
      </div>

      <div className="input_container">
          <label htmlFor="price">Data:</label>
          <input value={date ? date : ''} onChange={(e:any) => setDate(e.target.value)} type="text" name='price' placeholder='Novo preço...' />
      </div>

      <div className="input_container">
          <label htmlFor="price">Descrição:</label>
          <input value={description ? description : ''} onChange={(e:any) => setDescription(e.target.value)} type="text" name='price' placeholder='Novo preço...' />
      </div>

      <input onClick={() => updateExpanses(amount!, expanseType!, expanseCategory!, date!, description!, id! )} type="submit" value='Salvar' />

    </form>
    <button className='btn-close' onClick={closeModal} >Cancelar</button>
    </>
  )
}
