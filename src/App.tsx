import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.js'

import Routes from './routes/routes'

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>

        <Routes />

      </UserProvider>
    </BrowserRouter>
  )
}
