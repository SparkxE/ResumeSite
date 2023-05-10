import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import WorkHistory from './pages/WorkHistory';
import NavBar from './NavBar';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/history' element={<WorkHistory/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
