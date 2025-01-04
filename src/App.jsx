import React from 'react'
import { Route, Routes } from 'react-router'
import Details from './details'
import Home from './Home'
import Context from './Context'

function App() {
  return (
    <Context>
    <Routes>
      <Route path='/details' element={<Details/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </Context>
  )
}

export default App
