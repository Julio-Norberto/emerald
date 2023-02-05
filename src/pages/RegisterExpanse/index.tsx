import './registerExpanse.css'

import { useState } from 'react'
import { DrawerMenu } from '../../components/DrawerMenu'
import { TableExpanse } from '../../components/TableExpanse'

export default function RegisterExpanse() {
  const [expanseType, setExpanseType] = useState<'entrada' | 'saida'>('entrada')

  return(
    <div>
      <DrawerMenu />
      <div className='expanse-container'>
        <h1>Cadastro de despesas</h1>
        <div className='form-container'>

          <div className='inputs'>

            {/* INICIO DOS INPUTS */}
            <div className='input-form'>
              <label htmlFor="amount"> Valor da despesa (R$): </label>
              <input type="text" name='amount' id='amount' placeholder='Digite o valor da despesa...' />
            </div>

            <div style={{ marginBottom: '20px' }} className='input-form'>
              <label htmlFor="expanseType">Informe o tipo da despesa</label>
              <select style={{ height: '30px' }} value={expanseType} onChange={e => setExpanseType(e.target.value as "entrada" | "saida")}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </select>
            </div>

            <div className='input-form'>
              <label htmlFor="type"> Informe a categoria da despesa: </label>
              <input type="text" placeholder="Informe o tipo:" list="faixa" name='type' id='type' />
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
              <input type="text" id='date' name='date' placeholder='Ex: 25/01/2002' />
            </div>

            <div className='input-form'>
              <label htmlFor="description">Descrição (opcional)</label>
              <textarea placeholder='Descrição da despesa...' name="description" id="description" cols={30} rows={10}></textarea>
            </div>
            {/* FIM DOS INPUTS */}

          </div>

          {/* INICIO DA TABELA */}
            <TableExpanse />
          {/* FIM DA TABELA */}
        </div>

      </div>
    </div>
  )
}
