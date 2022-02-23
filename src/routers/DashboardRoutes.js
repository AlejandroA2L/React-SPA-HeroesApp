import React from 'react'
import { Route,  Routes} from 'react-router-dom'
import { MarvelScreen } from '../Components/marvel/MarvelScreen'
import { SearchScreen } from '../Components/search/SearchScreen'
import { DcomicsScreen} from '../Components/dc/DcomicsScreen'
import { Navbar } from '../Components/ui/NavBar'
import { HeroeScreen } from '../Components/hero/HeroeScreen'

export const DashboardRoutes = () => {
  return (
   <>
   <Navbar/>
<div className='container'>
   <Routes>
                <Route path="/marvel" element={<MarvelScreen/>}></Route>
                <Route path="/dc" element={<DcomicsScreen/>}></Route>
                <Route path="/search" element={<SearchScreen/>}></Route>
                <Route path="hero/:heroeId" element={<HeroeScreen/>}/>
                <Route path="/" element={<MarvelScreen/>}></Route>
            
            </Routes>  
            </div>
   </>
  )
}
