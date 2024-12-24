import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';  // Esto renderiza el contenido de las rutas secundarias

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Este es el panel que se mostrará */}
      <div style={{ flex: 1 }}>
        <Outlet /> {/* Aquí se renderizan las rutas de las páginas dentro de Layout */}
      </div>
    </div>
  );
};

export default Layout;
