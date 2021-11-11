import React from "react";

export function Navbar() {
    const navbarArray= ["Home","Projects", "About", "Contact"]
    const mappedNavbar = navbarArray.map((navItem) =>{return <a key={navItem} className={`navbar navbar-${navItem}`} href= {`/${navItem}`}>{navItem}</a>})
    
    return(
        <nav className="site-navbar">
                <a href="/" className="logo-link"><img className="site-logo" src="images/logo.svg" alt="Code for Coffee Logo" /></a>
                <div className="nav-links">{mappedNavbar}</div>
                <div className="toggle"><a href="#"><i class="fas fa-bars"></i></a></div>
        </nav>
    );
}