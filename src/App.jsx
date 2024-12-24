import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashbord/Dashboard';  // Asegúrate de tener el archivo Dashboard.js
import Layout from './components/Layoud';  // Asegúrate de tener el archivo Layout.js que contiene el Sidebar

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas que no requieren el Layout (sin Sidebar) */}
        <Route path="/login" element={<Login />} />

        {/* Rutas que requieren el Layout con el Sidebar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />  {/* Ruta principal */}
          {/* Otras rutas con el panel lateral (sidebar) */}
          
          {/* <Route path="/socios" element={<Socios />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/estatutos" element={<Estatutos />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
