import React from "react";

export function Navbar() {
    
    return(
        <header className="primary-header flex">
                <img src="./images/logo.svg" alt="Logo" className="logo" />
            <nav>
                <ul id= "primary-navigation" className="primary-navigation flex">
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