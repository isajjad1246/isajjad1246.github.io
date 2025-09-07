import React from 'react';
import './Header.css';

{/* Header will go here */}


export default Header;


function Header() {
    return (
         <header className="header">
            <nav className="header-nav">
                <a href="/about">About</a>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}

