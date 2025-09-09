import my_headshot from './my_headshot.jpeg';
import './App.css';
import Header from './Header';
import Typewriter from './Typewriter';
import img from './img.css';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import About from './About';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">

        <section>
          <Home />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='experience'>
          <Experience />
        </section>

        <section id='contact'>
          <Contact />
        </section>
        
      </header>
    </div>
  );
}

export default App;
