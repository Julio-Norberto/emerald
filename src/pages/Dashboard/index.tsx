import { DrawerMenu } from "../../components/DrawerMenu"
import './Dashboard.css'

export default function Dashboard() {
  return(
    <div>
      <DrawerMenu />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}
