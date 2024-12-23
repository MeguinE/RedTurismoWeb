import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Barra lateral */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
