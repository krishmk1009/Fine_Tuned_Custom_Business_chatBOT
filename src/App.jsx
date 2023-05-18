import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} /> */}

    </Routes>
  
  </BrowserRouter>
  )
}

export default App