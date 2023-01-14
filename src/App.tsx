import './App.css'
import { BrowserRouter } from 'react-router-dom'
//import { app } from '../src/services/firebaseConnection.js'
import Routes from './routes/routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
