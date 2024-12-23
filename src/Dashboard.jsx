import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Datos para el gráfico de ingresos mensuales
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Ingresos Mensuales',
        data: [5000, 7000, 6000, 7500, 8000, 9000, 8500, 10000, 12000, 15000, 16000, 18000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Barra lateral */}
      <div className="bg-blue-900 text-white w-64 p-4">
        <h2 className="text-3xl font-semibold">Turismo Asociado</h2>
        <ul className="mt-8 space-y-4">
          <li className="cursor-pointer">Inicio</li>
          <li className="cursor-pointer">Socios</li>
          <li className="cursor-pointer">Actividades</li>
          <li className="cursor-pointer">Pagos</li>
          <li className="cursor-pointer">Reportes</li>
        </ul>
      </div>

      {/* Contenedor principal */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-gray-500">Total Socios</h3>
            <p className="text-3xl font-semibold">1,423</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-gray-500">Nuevos Socios (Mes)</h3>
            <p className="text-3xl font-semibold">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-gray-500">Ingresos por Membresías</h3>
            <p className="text-3xl font-semibold">$15,000</p>
          </div>
        </div>

        {/* Gráfico de Ingresos Mensuales */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Ingresos Mensuales</h3>
          <Line data={data} />
        </div>

        {/* Actividades Recientes */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Actividades Recientes</h3>
          <ul className="space-y-4">
            <li>Excursión a la playa - 15 de diciembre</li>
            <li>Reunión mensual - 5 de diciembre</li>
            <li>Taller de fotografía - 22 de noviembre</li>
          </ul>
        </div>

        {/* Socios con Renovación Pendiente */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Renovación Pendiente</h3>
          <ul className="space-y-4">
            <li>Juan Pérez - Renovación: 15/12/2024</li>
            <li>Maria García - Renovación: 01/01/2025</li>
            <li>Carlos López - Renovación: 20/12/2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
