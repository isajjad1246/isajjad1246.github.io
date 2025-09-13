import my_headshot from './my_headshot.jpeg';
import './App.css';
import Header from './Header';
import Typewriter from './Typewriter';
import img from './img.css';
import Experience from './pages/Experience';
// import Contact from './pages/Contact';
import About from './About';
import Home from './Home';
import { useState } from 'react';
// import './theme.css';
// import ColorChanger from './DarkModeContext';


function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // className={isDarkMode ? 'theme-dark' : 'theme-light'}
  return (
    <div > 
      <Header/>
      <header className="App-header">

        <section id='home'>
          <Home />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='experience'>
          <Experience />
        </section>


        {/* <section id='resume'>
          <Resume />
        </section> */}

        
      </header>
    </div>
  );
}

export default App;
