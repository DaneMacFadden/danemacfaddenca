import './App.css'
import Tabbar from './components/Tabbar'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Tabbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
