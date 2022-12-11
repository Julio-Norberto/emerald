import { Route, Routes as ReactRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

export default function Routes() {
    return (
        <ReactRoutes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
        </ReactRoutes>
    )
}