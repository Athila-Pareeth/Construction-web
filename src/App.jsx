
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import {  Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';
import Career from './Pages/Career';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/contact' element={<Contact/>}/>


      </Routes>      
      <Footer/>
    </>
  )
}

export default App
