import { Route, Routes as ReactRoutes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RegisterExpanse from '../pages/RegisterExpanse'

export default function Routes() {
    return (
        <ReactRoutes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/dashboard' element={ <Dashboard /> } />
            <Route path='/dashboard/register' element={ <RegisterExpanse /> } />
        </ReactRoutes>
    )
}
