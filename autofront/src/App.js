import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Agregar from './page/agregarVehiculos';
import Mostrar from './page/listarVehiculos';
import Listar from './page/listarReparaciones';
import AgregarRep from './page/agregarReparaciones';
import Home from './page/home';

function App() {
  return (
    <Router>
      <div class="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reparaciones" element={<Listar/>} />
            <Route path="/agregareparaciones" element={<AgregarRep/>} />
            <Route path="/mostrar" element={<Mostrar/>} />
            <Route path="/agregar" element={<Agregar/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
