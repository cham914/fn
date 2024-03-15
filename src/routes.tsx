import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import ReLogin from './pages/login-again'
import Otp from './pages/otp'
import Addition from './pages/additional'
import Addition2 from './pages/final'
import Grats from './pages/grats'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/error' element={<ReLogin/>}/>
            <Route path='/auth' element={<Otp/>}/>
            <Route path='/auth/verify' element={<Addition/>}/>
            <Route path='/auth/verify/2' element={<Addition2/>}/>
            <Route path='/success' element={<Grats/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}