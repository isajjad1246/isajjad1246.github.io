import React from 'react';
import './Header.css';
// Remove the Link import since you won't need React Router for single-page scrolling

function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    };

    return (
        <header className="header">
            <nav className="header-nav">
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('about')}>About</button>
                <button onClick={() => scrollToSection('experience')}>Experience</button>
                {/* <button onClick={() => scrollToSection('contact')}>Contact</button> */}
            </nav>
        </header>
    );
}

export default Header;