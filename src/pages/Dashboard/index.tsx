import { PlusCircle, MinusCircle, CurrencyCircleDollar, File } from 'phosphor-react'
import { DrawerMenu } from '../../components/DrawerMenu'
import { useEffect, useState } from 'react'
import { TableExpanse } from '../../components/TableExpanse'
import _ from 'lodash'

import CardsDashboard from "../../components/CardsDashboard"
import graph from '../../assets/graph.jpg'
import api from '../../utils/api'

import './Dashboard.css'

interface IUserExpanses {
  amount: string,
  type: string,
  expanseType: string,
  date: string,
  description: string
  createdAt: Date
}

export default function Dashboard() {
  const [expanses, setExpanses] = useState<IUserExpanses[]>()
  const [entryExpenses, setEntryExpanses] = useState<number>()
  const [outGoingExpanses, setOutGoingExpanses] = useState<number>()
  const [total, setTotal] = useState<number>()

  useEffect(() => {
    async function fetchUserExpanses() {
      const token = localStorage.getItem('token')
      const data = await api.get('/expanses', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token!)}`
        }
      }).then((response) => {
        return response.data
      }).catch(err => console.log(err))

      setExpanses(data)
      loadData(data)
    }

    fetchUserExpanses()
  }, [])

  useEffect(() => {
    async function sumExpanses() {
      let sum = 0
      let sub = 0
      if(expanses)
      for(var i = 0; i < expanses!.length; i++) {
        if(expanses![i].expanseType === 'entrada') {
          setEntryExpanses(sum += parseInt(expanses![i].amount))
        } else {
          setOutGoingExpanses(sub += parseInt(expanses![i].amount))
        }
      }
    }

    async function sumTotal() {
      setTotal(entryExpenses! - outGoingExpanses!)
    }

    sumExpanses()
    sumTotal()
  })

  const loadData = async (data: IUserExpanses[]) => {
    const values = _.groupBy(data, (value) => {
      return value.expanseType
    })

    const result = _.map(values, (value, key) => {
      return [
        key,
        _.sumBy(values[key], (v) => parseFloat(v.amount))
      ]
    })

    console.log(result)
  }

  return(

    <div className='primary-div'>
      <DrawerMenu />
      <div className="dashboard-content">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
        </div>

        <div className="dashboard-cards">
          <CardsDashboard
            background={'linear-gradient(47deg, rgba(20,16,16,1) 76%, rgba(4,193,140,1) 120%, rgba(1,195,141,1) 100%'}
            icon={ <PlusCircle size={72} color='#01C38D' /> }
            total={ expanses ? `R$ ${entryExpenses!?.toString()}` : '0'}
            desc='Total de entradas'
          />
          <CardsDashboard
            background={'linear-gradient(47deg, rgba(20,16,16,1) 76%, #c10404 120%, #c10404) 100%'}
            icon={ <MinusCircle size={72} color='red' /> }
            total={ expanses ? `R$ ${outGoingExpanses!?.toString()}` : '0'}
            desc='Total de saídas'
          />
          <CardsDashboard
            background={'linear-gradient(47deg, rgba(20,16,16,1) 76%, #fffb04 120%, #fffb04) 100%'}
            icon={ <CurrencyCircleDollar size={72} color='yellow' /> }
            total={ expanses && total && total > 0 ? `R$ +${total}` : expanses && total && total < 0 ? `R$ -${total}` : '0'}
            desc='Saldo total'
          />
        </div>

        <img style={{ marginTop: '70px' }} height={580} width={800} src={graph} alt="" />
      </div>

      <div className='table-div'>
        <TableExpanse title='Todas as despesas' action={false} />
        <button className='btn-pdf' >Exportar PDF <File color='#fff' size={20} style={{ marginLeft: '10px' }} /> </button>
      </div>

    </div>
  )
}
