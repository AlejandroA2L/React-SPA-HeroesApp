import React from 'react';
import { BrowserRouter, Route,  Routes} from 'react-router-dom'

import { LoginSceen } from '../Components/login/LoginSceen'

import { DashboardRoutes } from './DashboardRoutes';




export const AppRouter = () => {
  return (
    //<BrowserRouter>
    //<h1>Hola</h1>\
    <BrowserRouter>
    
            <Routes>
                <Route path="/login" element={<LoginSceen/>}></Route>  
              <Route path="/*" element={<DashboardRoutes/>}/>
            </Routes>  
            </BrowserRouter>
    //</BrowserRouter>
  )
}
