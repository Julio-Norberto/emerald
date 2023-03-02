import { Route, Routes as ReactRoutes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RegisterExpanse from '../pages/RegisterExpanse'
import Contact from '../pages/Contact'
import Donate from '../pages/Donate'


import { useAuth } from '../hooks/useAuth'

export default function Routes() {
  const { authenticated } = useAuth()

  return (
      <ReactRoutes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/dashboard' element={ authenticated ? <Dashboard /> : <Login /> } />
          <Route path='/dashboard/register' element={ authenticated ? <RegisterExpanse /> : <Login /> } />
          <Route path='/contato' element={ <Contact /> } />
          <Route path='/donate' element={ <Donate /> } />
      </ReactRoutes>
  )
}
