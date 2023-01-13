import './cardsDashboard.css'
import { CurrencyCircleDollar } from 'phosphor-react'

interface ICardsDashboardProps {
  icon: React.ReactNode
  total: string
  desc: string
  background: string
}

export default function CardsDashboard({icon, total, desc, background}: ICardsDashboardProps) {
  return(
    <div style={{ background: background }} className="cardDash-container">
      {icon}
      <h2>{total}</h2>
      <p>{desc}</p>
    </div>
  )
}
