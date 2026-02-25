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
                    <Link to="/ResumeSite/">Home</Link>
                </li>
                <li>
                    <Link to="/ResumeSite/about">About</Link>
                </li>
                <li>
                    <Link to="/ResumeSite/history">Work History</Link>
                </li>
                <li>
                    <Link to="/ResumeSite/education">Education</Link>
                </li>
                <li>
                    <Link to="/ResumeSite/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </div>
        <div id='page-body'>
          <Routes>
            <Route path='/ResumeSite/' element={<Home />}></Route>
            <Route path='/ResumeSite/about' element={<About />}></Route>
            <Route path='/ResumeSite/history' element={<WorkHistory />}></Route>
            <Route path='/ResumeSite/education' element={<Education />}></Route>
            <Route path='/ResumeSite/contact' element={<Contact />}></Route>
            <Route path='/ResumeSite/notFound' element={<NotFound />}></Route>
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
