
import './App.css';
import Inicio from './components/Inicio';
import BarraNav from './components/BarraNav';
import GestionPrecios from './components/GestionPrecios';
import Footer from './components/Footer';
import GestionDispon from './components/GestionDispon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Puntos from './components/Puntos';


function App() {
  return(
    <Router>  
      <BarraNav />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/GestionPrecios" element={<GestionPrecios />} />
        <Route exact path="/GestionDispon" element={<GestionDispon />} />
        <Route exact path="/Puntos" element={<Puntos />} />
      </Routes> 
     
      <Footer />  
    </Router>
  );
}

export default App;
