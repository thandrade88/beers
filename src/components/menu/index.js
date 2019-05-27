import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const Menu = () => {
    return (
        <div id="menu">
            <div className="content">
                <ul className="menu-links">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favourites">Favourites</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;