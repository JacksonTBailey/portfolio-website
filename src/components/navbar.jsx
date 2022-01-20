import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../iconComponents/Logo';

export function Navbar() {

    let hamburgerToggle =() =>{
        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');
        const visibility = primaryNav.getAttribute('data-visible');
            if (visibility==="true"){
                primaryNav.setAttribute("data-visible", false);
                navToggle.setAttribute('aria-expanded', false);
            } else {
                primaryNav.setAttribute("data-visible", true); 
                navToggle.setAttribute('aria-expanded', true);
            }
        }

    return (
        <header className="primary-header">
            
        
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={hamburgerToggle}>
            <span className="sr-only">Menu</span>
        </button>
        
        <nav>
            <Logo className={'jbLogo'}/>
            <ul id= "primary-navigation" className="primary-navigation flex" data-visible="false">
                <li className="active">
                    <NavLink to='/' className='navbar-link' onClick={hamburgerToggle}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/projects' className='navbar-link' onClick={hamburgerToggle}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='navbar-link' onClick={hamburgerToggle}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='navbar-link' onClick={hamburgerToggle}>Contact</NavLink>
                </li>

            </ul>
        </nav>
    </header>
    );
}
