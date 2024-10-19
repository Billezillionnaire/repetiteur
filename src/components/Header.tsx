import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <Link to="/home">
        <img src="/images/logo.png" alt="Logo" className="app-logo" />
      </Link>
      <Link to="/register" className="become-tutor-button">Devenir instituteur</Link>
    </header>
  );
}

export default Header;