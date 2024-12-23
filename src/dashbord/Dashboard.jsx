import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Estado para almacenar los datos
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Ingresos Mensuales',
        data: [],
        fill: false,
        borderColor: '#1E3A5F', // Azul Montaña
        tension: 0.1,
      },
    ],
  });

  const [totalSocios, setTotalSocios] = useState(0);
  const [nuevosSocios, setNuevosSocios] = useState(0);
  const [ingresosMembresias, setIngresosMembresias] = useState(0);
  const [actividadesRecientes, setActividadesRecientes] = useState([]);
  const [renovacionesPendientes, setRenovacionesPendientes] = useState([]);


  // Consumir los datos del backend usando useEffect
  useEffect(() => {
    // Reemplaza con la URL de la API
    fetch('/api/dashboard-data')
      .then((response) => response.json())
      .then((data) => {
        // Asignar los datos recibidos al estado
        setData({
          labels: data.labels,
          datasets: [
            {
              label: 'Ingresos Mensuales',
              data: data.ingresosMensuales,
              fill: false,
              borderColor: '#1E3A5F', // Azul Montaña
              tension: 0.1,
            },
          ],
        });
        setTotalSocios(data.totalSocios);
        setNuevosSocios(data.nuevosSocios);
        setIngresosMembresias(data.ingresosMembresias);
        setActividadesRecientes(data.actividadesRecientes); // Nuevas actividades
        setRenovacionesPendientes(data.renovacionesPendientes); // Nuevas renovaciones
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Contenedor principal */}
      <div className="flex-1 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-4xl font-bold text-[#1E3A5F]">Bienvenido</h1>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
          <div className="bg-[#ceffc2] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-[#1E3A5F]">Total Socios</h3>
            <p className="text-3xl font-semibold">{totalSocios}</p>
          </div>
          <div className="bg-[#ceffc2] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-[#1E3A5F]">Nuevos Socios</h3>
            <p className="text-3xl font-semibold">{nuevosSocios}</p>
          </div>
          <div className="bg-[#ceffc2] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-[#1E3A5F]">Ingresos por Membresías</h3>
            <p className="text-3xl font-semibold">${ingresosMembresias}</p>
          </div>
        </div>

        {/* Gráfico de Ingresos Mensuales */}
        <div className="bg-[#ceffc2] p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-[#1E3A5F] mb-4">Ingresos Mensuales</h3>

          <div className="relative h-80">
            <Line
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    ticks: {
                      color: '#1E3A5F',
                    },
                  },
                  y: {
                    ticks: {
                      color: '#1E3A5F',
                    },
                  },
                },
              }}
            />
          </div>

          <div className="text-sm text-[#1E3A5F] mt-4">
            <p>El gráfico muestra los ingresos mensuales, lo que ayuda a realizar un seguimiento de la rentabilidad y el crecimiento de la empresa.</p>
          </div>
        </div>

        {/* Actividades Recientes */}
        <div className="bg-[#ceffc2] p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Actividades Recientes</h3>
          <ul className="space-y-4">
            {actividadesRecientes.map((actividad, index) => (
              <li key={index}>{actividad.nombre} - {actividad.fecha}</li>
            ))}
          </ul>
        </div>

        {/* Socios con Renovación Pendiente */}
        <div className="bg-[#ceffc2] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Renovación Pendiente</h3>
          <ul className="space-y-4">
            {renovacionesPendientes.map((renovacion, index) => (
              <li key={index}>{renovacion.nombre} - Renovación: {renovacion.fecha}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
