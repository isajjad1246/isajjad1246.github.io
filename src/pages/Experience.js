import React from 'react';
import './Experience.css';
import { useState } from 'react';


function Experience() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <div class="card-container">
      <h1>Experience</h1>
      
      <div class="box">
        <div className={`card-wrapper ${isFlipped1 ? 'flipped' : ''}`}
  onClick={handleFlip1}>
          <div class="front-face">Bank of America</div>
          <div class="back-face">Software Engineer</div>
        </div>
      </div>

      <div class="box">
        <div className={`card-wrapper ${isFlipped2 ? 'flipped' : ''}`}
  onClick={handleFlip2}>
          <div class="front-face">Bank of America</div>
          <div class="back-face">
            Software Engineer Intern on Equity Services Technology Team
          </div>
        </div>
      </div>

      <div class="box">
        <div className={`card-wrapper ${isFlipped3 ? 'flipped' : ''}`}
  onClick={handleFlip3}>
          <div class="front-face">Johnson and Johnson</div>
          <div class="back-face">Technology Intern</div>
        </div>
      </div>

    </div>

  );
}

export default Experience;
