import { PlusCircle, MinusCircle, CurrencyCircleDollar } from 'phosphor-react'
import { DrawerMenu } from '../../components/DrawerMenu'
import CardsDashboard from "../../components/CardsDashboard"
import graph from '../../assets/graph.jpg'
import './Dashboard.css'

export default function Dashboard() {
  return(
    <div>
      <DrawerMenu />
      <div className="dashboard-content">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
        </div>

        <div className="dashboard-cards">
          <CardsDashboard
            background={'linear-gradient(47deg, rgba(20,16,16,1) 76%, rgba(4,193,140,1) 120%, rgba(1,195,141,1) 100%'}
            icon={ <PlusCircle size={72} color='#01C38D' /> }
            total='R$ +1200'
            desc='Total de entradas'
          />
          <CardsDashboard
            background={'linear-gradient(47deg, rgba(20,16,16,1) 76%, #c10404 120%, #c10404) 100%'}
            icon={ <MinusCircle size={72} color='red' /> }
            total='R$ -200'
            desc='Total de saídas'
          />
          <CardsDashboard
            background={'linear-gradient(47deg, rgba(20,16,16,1) 76%, #fffb04 120%, #fffb04) 100%'}
            icon={ <CurrencyCircleDollar size={72} color='yellow' /> }
            total='R$ +1000'
            desc='Saldo total'
          />
        </div>

        <img style={{ marginTop: '70px' }} height={580} width={1000} src={graph} alt="" />
      </div>
    </div>
  )
}
