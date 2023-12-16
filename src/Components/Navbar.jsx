import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import { MenuItems } from './Menu';

const Navbar = () => {
    const [state, setState] = useState({ clicked: false });

    const handleClick = () => {
        setState({ clicked: !state.clicked });
    }

    return (
        <nav className='Navbar-item'>
            <h1 className='Navbar-logo'>Trippy</h1>
            <div className='menu-icons' onClick={handleClick}>
                <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={state.clicked ? "Navbar-menu active" : "Navbar-menu"}>
                {MenuItems.map((items, index) => (
                    <li key={index}>
                        <Link className={items.cName} to={items.URL}>
                            <i className={items.icon}></i>
                            {items.title}
                        </Link>
                    </li>
                ))}
                <button className='button'>Sign up</button>
            </ul>
        </nav>
    );
}

export default Navbar;
