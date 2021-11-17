import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <header className="primary-header flex">
            
            <img src="./images/logo.svg" alt="Logo" className="logo" />
            
            <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onLoad={hamburgerToggle}>
                <span className="sr-only">Menu</span>
            </button>
            
            <nav>
                <ul id= "primary-navigation" className="primary-navigation flex" data-visible="false">
                    <li className="active">
                        <a href="home.jsx">
                            <span aria-hidden="true">00</span>Home
                        </a>
                    </li>
                    <li>
                        <a href="projects.jsx">
                            <span aria-hidden="true">01</span>Projects
                        </a>
                    </li>
                    <li>
                        <a href="about.jsx">
                            <span aria-hidden="true">02</span>About
                        </a>
                    </li>
                    <li>
                        <a href="contact.jsx">
                            <span aria-hidden="true">03</span>Contact
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
        );
    }
}


    function hamburgerToggle(){
        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');
    
        navToggle.addEventListener('click', ()=> {
            const visibility = primaryNav.getAttribute('data-visible');
            if (visibility==="true"){
                primaryNav.setAttribute("data-visible", false);
                navToggle.setAttribute('aria-expanded', false)
            } else {
                primaryNav.setAttribute("data-visible", true); 
                navToggle.setAttribute('aria-expanded', true);
            }
        })
    }
