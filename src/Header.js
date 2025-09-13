import React from 'react';
import './Header.css';
import theme from './theme.css';
import App from './App'
// import ColorChanger from './DarkModeContext';
// Remove the Link import since you won't need React Router for single-page scrolling

function Header() {
    const toggleTheme = () => {
        var element = document.body;
        element.classList.toggle("theme-dark");
    }

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
                <button className='header_button' onClick={() => scrollToSection('home')}>Home</button>
                <button className='header_button' onClick={() => scrollToSection('about')}>About</button>
                <button className='header_button' onClick={() => scrollToSection('experience')}>Experience</button>
                {/* <button className='header_button' onClick={() => scrollToSection('resume')}>Resume</button> */}
                <a href="https://drive.google.com/file/d/1oKx-251emuc4UbFYak2kU3nSsZwMgDzO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className='header_button'>Resume</button>
                </a>
                <button className='header_button' onClick={toggleTheme}>Toggle Dark Mode</button>
                {/* <ColorChanger toggleTheme={toggleTheme} /> */}
            </nav>
        </header>
    );
}

export default Header;