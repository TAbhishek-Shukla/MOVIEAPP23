import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Singlemovie from './Singlemovie'
import Error from './Error'
import Navbar from './Navbar'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/movie/:id'  element={<Singlemovie/>}/>
    <Route path='*' element={<Error/>} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App