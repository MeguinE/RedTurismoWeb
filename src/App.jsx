import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashbord/Dashboard';  // Asegúrate de tener el archivo Dashboard.js
import Layout from './components/Layoud';  // Asegúrate de tener el archivo Layout.js que contiene el Sidebar
import Login from './login/login';

function App() {
  return (
    <Router>
      <Layout>  {/* Envolvemos el contenido dentro del Layout para mantener la barra lateral visible */}
        <Routes>
          {/* Definir las rutas aquí */}
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />} />  {/* Ruta principal */}
          {/* Agrega más rutas para otras páginas si es necesario */}
          {/* <Route path="/socios" element={<Socios />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/estatutos" element={<Estatutos />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
