import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashbord/Dashboard'; // Asegúrate de tener el archivo Dashboard.js
import Layout from './components/Layoud'; // Asegúrate de tener el archivo Layout.js que contiene el Sidebar
import Login from './login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Aquí envolvemos el Dashboard dentro del Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Rutas adicionales que necesitan el Layout */}
        {/* <Route path="/socios" element={<Socios />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/estatutos" element={<Estatutos />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
