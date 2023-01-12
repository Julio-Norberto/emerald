import { DrawerMenu } from "../../components/DrawerMenu"
import './Dashboard.css'

export default function Dashboard() {
  return(
    <div>
      <DrawerMenu />
      <div className="dashboard-content">
        <h1>Ola, mundo</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis maxime ipsum, facere eaque saepe harum veritatis cumque necessitatibus doloremque consequuntur inventore accusantium tempora, dignissimos corrupti hic fugit adipisci at architecto?</p>
      </div>
    </div>
  )
}
