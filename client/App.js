import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Details  from './Components/Details/Details'
import Landing from './Components/Landing/Landing'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/movies/:imdb" element={<Details/>}/>
    </Routes>
  )
}

export default App