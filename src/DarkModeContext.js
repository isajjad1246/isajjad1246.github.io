import { useState } from 'react';
import './theme.css';

function ColorChanger({toggleTheme}) {
  return (
    <button onClick={() => {
        console.log("Button clicked!"); // ← Add this
        toggleTheme();
      }}>
        Toggle Dark Mode
      </button>
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // const switchColor = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  
  // return (
  //   <div className={isDarkMode ? 'theme-dark' : 'theme-light'}>
  //     <button onClick={switchColor}>
  //       Toggle Dark Mode
  //     </button>
  //   </div>
  );
}

export default ColorChanger;