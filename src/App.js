
import './App.css';
import Inicio from './components/Inicio';
import BarraNav from './components/BarraNav';
import GestionPrecios from './components/GestionPrecios';
import Footer from './components/Footer';
import GestionDispon from './components/GestionDispon';
import FormPrecios from './components/FormPrecios';
import FormDisp from './components/FormDispon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Puntos from './components/Puntos';
import Login from './components/Login';
import Menu from './components/Menu';


function App() {
  return(
    <Router>  
      <BarraNav />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/GestionPrecios" element={<GestionPrecios />} />
        <Route exact path="/GestionDispon" element={<GestionDispon />} />
        <Route exact path="/Puntos" element={<Puntos />} />
         <Route exact path="/FormPrecios" element={<FormPrecios />} />
        <Route exact path="/FormDisp" element={<FormDisp />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Menu" element={<Menu />} />
      </Routes> 
     
      <Footer />  
    </Router>
  );
}

export default App;
