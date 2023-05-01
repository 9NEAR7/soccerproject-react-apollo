import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
    <Link 
        className="navbar-brand" 
        to="/"
    >
        API Players
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/create"
            >
                Crear
            </NavLink>

            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/"
            >
                Jugadores
            </NavLink>
           
        </div>
    </div>

    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
           
            <span className="nav-item nav-link text-primary">
                Cristian Terán
            </span>
        </ul>
    </div>
</nav>
    
    






    
  );
};

export default Header;