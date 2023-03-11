import './registerExpanse.css'
import { useEffect, useState } from 'react'
import { DrawerMenu } from '../../components/DrawerMenu'
import { TableExpanse } from '../../components/TableExpanse'
import { Message } from '../../components/Message'
import { useExpanse } from '../../hooks/useExpanse'

export default function RegisterExpanse() {
  const [amount, setAmount] = useState<string>()
  const [expanseType, setExpanseType] = useState<'entrada' | 'saida'>('entrada')
  const [expanseCategory, setExpanseCategory] = useState<string>()
  const [date, setDate] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [changed, setChanged] = useState(false)
  const { registerExpanse } = useExpanse()

  function handleRegisterExpanse() {
    registerExpanse(amount!, expanseType, expanseCategory!, date!, description!)
    setChanged(!changed)
  }

  return(
    <div className='scroll'>

      <div className='expanse-container'>
        <DrawerMenu top='60px' left='30px' />
        <Message />

        <div className='form-container'>

          <div className='inputs'>
            <h1>Cadastro de despesas</h1>
            {/* INICIO DOS INPUTS */}
            <div className='input-form'>
              <label htmlFor="amount"> Valor da despesa (R$): </label>
              <input onChange={e => setAmount(e.target.value)} type="text" name='amount' id='amount' placeholder='Digite o valor da despesa...' />
            </div>

            <div style={{ marginBottom: '20px' }} className='input-form'>
              <label htmlFor="expanseType">Informe o tipo da despesa</label>
              <select className='input-select' style={{ height: '30px' }} value={expanseType} onChange={e => setExpanseType(e.target.value as "entrada" | "saida")}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>

            <div className='input-form'>
              <label htmlFor="type"> Informe a categoria da despesa: </label>
              <input onChange={e => setExpanseCategory(e.target.value)} type="text" placeholder="Informe o tipo:" list="faixa" name='type' id='type' />
              <datalist id="faixa">
                <option value="">Tipo:</option>
                <option value="alimentação"></option>
                <option value="lazer"></option>
                <option value="cartão de crédito"></option>
                <option value="despesas"></option>
                <option value="academia"></option>
                <option value="faculdade"></option>
              </datalist>
            </div>

            <div className='input-form'>
              <label htmlFor="date">Informe a data:</label>
              <input onChange={e => setDate(e.target.value)} type="text" id='date' name='date' placeholder='Ex: 25/01/2002' />
            </div>

            <div className='input-form'>
              <label htmlFor="description">Descrição (opcional)</label>
              <textarea onChange={e => setDescription(e.target.value)} placeholder='Descrição da despesa...' name="description" id="description" cols={30} rows={10}></textarea>
            </div>

            <button onClick={handleRegisterExpanse} className='btn-register-expanse'>Cadastrar despesa</button>
            {/* FIM DOS INPUTS */}

          </div>

          <div className='table-with-divs'>
          {/* INICIO DA TABELA */}
          <TableExpanse title='Saídas recentes' type='saida' action={true} changed={changed} height='320px' maxHeight='100%' showModal={true} />
          <TableExpanse title='Entradas recentes' type='entrada' action={true} changed={changed} height='320px' maxHeight='100%' showModal={false} />
          {/* FIM DA TABELA */}
          </div>

        </div>
      </div>
    </div>
  )
}
