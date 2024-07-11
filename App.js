import About from './About';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';



function App() {
  return (
    <Router>
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;

