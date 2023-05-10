import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import WorkHistory from './pages/WorkHistory';
import NavBar from './components/NavBar';
import Education from './pages/Education';

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <div>
          <NavBar/>
        </div>
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/history' element={<WorkHistory/>}></Route>
            <Route path='/education' element={<Education/>}></Route>
          </Routes>
        </div>
        <div>
          <footer>This site was created by Aaron Anderson using React.JS and Vite</footer>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
