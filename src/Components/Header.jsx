import React, { useState } from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center bg-gray-800 py-4 px-8 fixed top-0 left-0 right-0 z-10">
      <p className="hover:text-gray-300 flex space-x-20 text-white text-lg font-mono">Apna Vyapar</p>
      <ul className="flex space-x-12 text-white font-mono">
        <li><a className="hover:text-gray-300 "><i className="ri-home-2-line"></i>Home</a></li>
        <li><a className="hover:text-gray-300"><i className="ri-discuss-line"></i>About</a></li>
        <li><a className="hover:text-gray-300"><i className="ri-search-line"></i>Search</a></li>
        <li><a className="hover:text-gray-300"><i className="ri-questionnaire-line"></i>Help</a></li>
        <li><a className="hover:text-gray-300"><i className="ri-user-line"></i>Sign In</a></li>
      </ul>
    </div>
  );
}

export default Header;

