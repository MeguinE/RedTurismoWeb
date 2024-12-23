import React from 'react';
import Dashboard from './dashbord/Dashboard';  // Asegúrate de tener el archivo Dashboard.js

function App() {
  return (
    <>
      <h1 className='text-4xl font-bold uppercase text-center mt-8'>
        Red de Turismo
      </h1>
      <p className="text-center mt-4">Bienvenido al sistema de gestión de socios</p>
      <Dashboard />  {/* Aquí agregamos el componente Dashboard */}
    </>
  );
}

export default App;
