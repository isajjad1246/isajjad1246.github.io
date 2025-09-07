import my_headshot from './my_headshot.jpeg';
import './App.css';
import Header from './Header';
import Typewriter from './Typewriter';
import img from './img.css';



function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={my_headshot} alt="logo" />
        <p>
          {/* enter main info here */}
          <Typewriter text="Hi! My name is Ifrah. I'm a Software Engineer based in NYC. I graduated from Rutgers University-New Brunswick in 2024 where I got my B.A. in Computer Science and Minor in Critical Intelligence Studies. I currently work for Bank of America in their Technology Analyst Program. Outside of the bank, I've also interned for Johnson and Johnson as a Data and Analytics Technology Intern." speed={70} />
        </p>

      </header>
    </div>
  );
}

export default App;
