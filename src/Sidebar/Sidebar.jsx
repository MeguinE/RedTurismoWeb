import React from 'react';

const Sidebar = () => {
  const menu = [
    { label: 'Inicio', router: '/' },
    { label: 'Socios', router: '/socios' },
    { label: 'Actividades', router: '/actividades' },
    { label: 'Pagos', router: '/pagos' },
    { label: 'Estatutos', router: '/estatutos' },
  ];

  return (
    <div className="bg-[#ffffff] text-black w-64 p-4">
      <h2 className="text-3xl font-semibold">Red de turismo</h2>
      <ul className="mt-5 space-y-4">
        {menu.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <a href={item.router}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
