import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink  to="/">Accueil</NavLink>
            <NavLink  to="/about">À propos</NavLink>
        </div>
    );
};

export default Navigation;