import { BrowserRouter, Routes, Route, Link } from 'react-router';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import WorkHistory from './pages/WorkHistory';
import NavBar from './components/NavBar';
import Education from './pages/Education';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <div id='NavbarItem'>
          <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/history">Work History</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/history' element={<WorkHistory />}></Route>
            <Route path='/education' element={<Education />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/notFound' element={<NotFound />}></Route>
          </Routes>
        </div>
        <div>
          <footer>
            This site was created by Aaron Anderson using React.JS and Vite -
            <a href="https://www.flaticon.com/free-icons/letter-a" title="letter a icons"> Letter A icon created by Freepik - Flaticon</a>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
