import { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './componentes/Lista';
import Capturados from './componentes/Capturados';
import Favoritos from './componentes/Favoritos';
import Aleatorios from './componentes/Aleatorios';
import Usuarios from './componentes/Usuarios';
import Emoji from './componentes/Emoji'; 
import Menu from './componentes/Menu';

import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/emoji/:name" element={<Emoji />} />
      </Routes>
    </Router>
  );
}

export default App;
