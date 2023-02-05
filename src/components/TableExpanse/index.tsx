import './tableExpanse.css'

export const TableExpanse: React.FC = () => {
  return (
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
  )
}
