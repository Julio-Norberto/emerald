import { PlusCircle, MinusCircle, CurrencyCircleDollar, File } from 'phosphor-react'
import { DrawerMenu } from '../../components/DrawerMenu'
import { useEffect, useState } from 'react'
import { TableExpanse } from '../../components/TableExpanse'
import { Chart } from 'react-google-charts'

import _ from 'lodash'

import CardsDashboard from "../../components/CardsDashboard"
import api from '../../utils/api'

import './Dashboard.css'

export interface IUserExpanses {
  amount: string,
  type: string,
  expanseType: string,
  date: string,
  description: string
  createdAt: Date
}

export default function Dashboard() {
  const [expanses, setExpanses] = useState<IUserExpanses[]>()
  const [chartData, setChartData] = useState<IUserExpanses[]>([])
  const [chartBarData, setBarChartData] = useState<IUserExpanses[]>([])
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
      setChartData(newArray(data))
      setBarChartData(loadBarData(data))
      newArray(data)
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

  const loadBarData: any = (data: IUserExpanses[]) => {
    const types = _.groupBy(data, (value) => {
      return value.expanseType
    })

    const result = _.map(types, (value, key) => {
      return [
        key,
        _.sumBy(types[key], v => parseFloat(v.amount))
      ]
    })

    return [["Entradas", "Saidas"], ...result]
  }

   const newArray: any = (data: IUserExpanses[]) => {
     const arr = data.map((value, key) => {
       if(value.expanseType === 'saida') {
         return [value.type, value.amount]
       }
     })

     const filetered = arr.filter(function(x) {
       return x !== undefined
     })

     console.log(filetered)
     return [["Tipo", "Total"], ...filetered]
   }

  var options = {
    backgroundColor: 'transparent',
    legend: { textStyle: { color: '#fff', fontSize: 15 } },
    colors: ['#4dc48c', '#e02b00', '#990999', '#f0f', '#3366cc', '#046447' ],
    is3D: true
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

        <div className='section-chart'>
          <h2>Gráfico de gastos e Saldo total</h2>
          <div className='div-charts'>
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={chartData}
              options={options}
            />

            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={chartBarData}
              options={options}
            />

          </div>
        </div>

      </div>

      <div className='table-div'>
        <TableExpanse title='Todas as despesas' action={false} />
        <button className='btn-pdf' >Exportar PDF <File color='#fff' size={20} style={{ marginLeft: '10px' }} /> </button>
      </div>

    </div>
  )
}
