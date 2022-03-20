import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={Logo} alt='logo'/>
          <a className="navbar-brand">Henry - Weather App</a>
          <SearchBar onSearch={onSearch}/>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
