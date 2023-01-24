import './registerExpanse.css'

import { DrawerMenu } from '../../components/DrawerMenu'

export default function RegisterExpanse() {
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

            <div className='input-form'>
              <label htmlFor="type"> Informe o tipo de despesa: </label>
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
              <input type="date" id='date' name='date' />
            </div>

            <div className='input-form'>
              <label htmlFor="description">Descrição (opcional)</label>
              <textarea name="description" id="description" cols={30} rows={10}></textarea>
            </div>
            {/* FIM DOS INPUTS */}

          </div>

          {/* INICIO DA TABELA */}
          <div className='expansive-table'>
          <h2 style={{ marginBottom: '30px' }} >Adições recentes</h2>
          <table border={1}>
            <thead>
            <tr>
                <th>Data</th>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>data1</td>
                <td>tipo1</td>
                <td>desc1</td>
                <td>valor1</td>
                <td>acao 1</td>
            </tr>
            <tr>
                <td>data2</td>
                <td>tipo2</td>
                <td>desc2</td>
                <td>valor2</td>
                <td>acao 2</td>
            </tr>
            <tr>
                <td>data3</td>
                <td>tipo3</td>
                <td>desc3</td>
                <td>valor3</td>
                <td>acao 3</td>
            </tr>
            </tbody>
          </table>
          </div>
          {/* FIM DA TABELA */}

        </div>

      </div>
    </div>
  )
}
